/**
 * Post-build smoke test. Runs against a started production server and fails the
 * build on the classes of regression that are invisible to typecheck and lint:
 * a route that stopped rendering, a redirect that broke, an internal link
 * pointing at nothing, or a page that lost its canonical or share image.
 */
const BASE = process.env.SMOKE_BASE_URL ?? 'http://localhost:3000';

const ROUTES = [
    '/',
    '/agriculture',
    '/agriculture/traceability',
    '/minerals',
    '/industrial',
    '/paint',
    '/services',
    '/about',
    '/gallery',
    '/contact',
    '/request-quote',
];

const REDIRECTS = {
    '/products': '/',
    '/products/agricultural-commodities': '/agriculture',
    '/products/solid-minerals': '/minerals',
    '/products/mechanical-parts-and-machinery': '/industrial',
    '/export': '/services',
    '/export-process': '/services',
};

const failures = [];
const fail = (msg) => failures.push(msg);

const get = (path, redirect = 'follow') => fetch(new URL(path, BASE), { redirect });

async function checkRoutes() {
    for (const route of ROUTES) {
        const res = await get(route);
        if (res.status !== 200) fail(`${route} returned ${res.status}, expected 200`);
    }
}

async function checkRedirects() {
    for (const [from, to] of Object.entries(REDIRECTS)) {
        const res = await get(from, 'manual');
        if (res.status < 300 || res.status >= 400) {
            fail(`${from} returned ${res.status}, expected a redirect`);
            continue;
        }
        const location = new URL(res.headers.get('location'), BASE).pathname;
        if (location !== to) fail(`${from} redirected to ${location}, expected ${to}`);
    }
}

async function checkNotFound() {
    const res = await get('/definitely-not-a-real-page');
    if (res.status !== 404) fail(`unknown path returned ${res.status}, expected 404`);
}

async function checkLinksAndMetadata() {
    const linked = new Set();

    for (const route of ROUTES) {
        const html = await (await get(route)).text();

        if (!/rel="canonical"/.test(html)) fail(`${route} is missing a canonical link`);
        if (!/property="og:image"/.test(html)) fail(`${route} is missing og:image`);
        if (!/<title>/.test(html)) fail(`${route} is missing a title`);
        if (/name="keywords"/.test(html)) fail(`${route} still ships a meta keywords tag`);

        for (const match of html.matchAll(/href="(\/[^"#]*)"/g)) linked.add(match[1]);
    }

    for (const href of linked) {
        const res = await get(href);
        if (res.status >= 400) fail(`internal link ${href} returned ${res.status}`);
    }
}

async function checkSeoRoutes() {
    const sitemap = await get('/sitemap.xml');
    if (sitemap.status !== 200) fail(`sitemap.xml returned ${sitemap.status}`);
    else {
        const xml = await sitemap.text();
        for (const route of ROUTES) {
            if (!xml.includes(`${route}<`) && !xml.includes(`${route}/<`)) {
                fail(`sitemap.xml is missing ${route}`);
            }
        }
    }

    const robots = await get('/robots.txt');
    if (robots.status !== 200) fail(`robots.txt returned ${robots.status}`);
}

async function checkApiContract() {
    const invalid = await fetch(new URL('/api/contact', BASE), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{}',
    });
    if (invalid.status !== 422)
        fail(`POST /api/contact with {} returned ${invalid.status}, expected 422`);

    const malformed = await fetch(new URL('/api/quote', BASE), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: 'not json',
    });
    if (malformed.status !== 400) {
        fail(`POST /api/quote with bad JSON returned ${malformed.status}, expected 400`);
    }
}

const checks = [
    ['routes', checkRoutes],
    ['redirects', checkRedirects],
    ['404 handling', checkNotFound],
    ['links and metadata', checkLinksAndMetadata],
    ['sitemap and robots', checkSeoRoutes],
    ['api contract', checkApiContract],
];

for (const [name, run] of checks) {
    const before = failures.length;
    await run();
    const added = failures.length - before;
    console.log(`${added === 0 ? 'pass' : 'FAIL'}  ${name}`);
}

if (failures.length > 0) {
    console.error(`\n${failures.length} smoke failure(s):`);
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
}

console.log('\nall smoke checks passed');

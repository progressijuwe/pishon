import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { siteConfig } from '@/config/site';

export const alt = `${siteConfig.name} — ${siteConfig.description}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const SCRIM = '#00122b';
const BLUE = '#3da5f5';

export default async function Image() {
    const [regular, extraBold] = await Promise.all([
        readFile(join(process.cwd(), 'src/assets/fonts/Manrope-Regular.ttf')),
        readFile(join(process.cwd(), 'src/assets/fonts/Manrope-ExtraBold.ttf')),
    ]);

    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: SCRIM,
                padding: 80,
                fontFamily: 'Manrope',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <svg width="72" height="72" viewBox="0 0 64 64" fill="#ffffff">
                    <path d="M33.543 22.531h-5.464v8.543h5.464c1.384 0 2.46-.348 3.228-1.043s1.151-1.797 1.151-3.307s-.384-2.586-1.151-3.229s-1.844-.964-3.228-.964" />
                    <path d="M31.999 2c-16.568 0-30 13.432-30 30s13.432 30 30 30C48.568 62 62 48.568 62 32S48.568 2 31.999 2m9.398 31.949c-1.699 1.418-4.125 2.125-7.277 2.125h-6.041v10.434h-6.023V17.492h12.458c2.872 0 5.162.748 6.87 2.244c1.707 1.496 2.562 3.813 2.562 6.949c-.001 3.424-.85 5.846-2.549 7.264" />
                </svg>
                <span style={{ fontSize: 40, fontWeight: 800, color: '#ffffff' }}>
                    {siteConfig.name}
                </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                    style={{
                        fontSize: 68,
                        fontWeight: 800,
                        color: '#ffffff',
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                    }}
                >
                    Connecting Global Markets with Nigerian Excellence
                </span>
                <span
                    style={{
                        marginTop: 28,
                        fontSize: 28,
                        color: '#ffffff',
                        opacity: 0.75,
                        lineHeight: 1.5,
                    }}
                >
                    Commodities, solid minerals and industrial machinery parts, exported worldwide.
                </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ display: 'flex', width: 72, height: 6, background: BLUE }} />
                <span style={{ fontSize: 24, color: BLUE, fontWeight: 800 }}>
                    {siteConfig.url.replace(/^https?:\/\//, '')}
                </span>
            </div>
        </div>,
        {
            ...size,
            fonts: [
                { name: 'Manrope', data: regular, style: 'normal', weight: 400 },
                { name: 'Manrope', data: extraBold, style: 'normal', weight: 800 },
            ],
        },
    );
}

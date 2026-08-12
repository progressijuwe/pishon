import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async redirects() {
        return [
            { source: '/products', destination: '/', permanent: true },
            {
                source: '/products/agricultural-commodities',
                destination: '/agriculture',
                permanent: true,
            },
            { source: '/products/solid-minerals', destination: '/minerals', permanent: true },
            {
                source: '/products/mechanical-parts-and-machinery',
                destination: '/industrial',
                permanent: true,
            },
            { source: '/export', destination: '/services', permanent: true },
            { source: '/export-process', destination: '/services', permanent: true },
        ];
    },
};

export default nextConfig;

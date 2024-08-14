/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'sv1.otruyencdn.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.otruyenapi.com',
                pathname: '/**',
            },
        ],
    },
    env: {
        apiDomain: 'https://otruyenapi.com/v1/api/',
    },

}

module.exports = nextConfig

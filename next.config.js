/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        domains: [
            'firebasestorage.googleapis.com',
            'sv1.otruyencdn.com',
            'img.otruyenapi.com'
        ],
    },
    env: {
        apiDomain: 'https://otruyenapi.com/v1/api/',
    },
    
}

module.exports = nextConfig

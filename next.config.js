/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
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
        apiKey: "AIzaSyAjmRa2_0iLvJ8ZrBldsDS9lOGbp-29REA",
        authDomain: "stone-novels.firebaseapp.com",
        projectId: "stone-novels",
        storageBucket: "stone-novels.appspot.com",
        messagingSenderId: "1025249922301",
        appId: "1:1025249922301:web:a74d856fc2467e6f088294",
        measurementId: "G-PY9CC9TKKD"
    },

}

module.exports = nextConfig

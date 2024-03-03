/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh5.googleusercontent.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;

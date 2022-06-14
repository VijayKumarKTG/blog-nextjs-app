/** @type {import('next').NextConfig} */

const nextConfig = () => {
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'Vijay',
      mongodb_password: 'sveZ0FrSdxMnUNN6',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-blog-next-app',
    },
  };
};

module.exports = nextConfig;

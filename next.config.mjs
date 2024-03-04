/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      POSTGRES_URL: 'postgres://default:Y7RDvxMdhP4y@ep-sparkling-tree-a4q58mxd-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require',
      },
};

export default nextConfig;

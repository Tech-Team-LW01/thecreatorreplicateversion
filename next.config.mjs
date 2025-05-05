/** @type {import('next').NextConfig} */

const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.prod.website-files.com',
              
            },
            {
              protocol: 'https',
              hostname: 'utfs.io',
  
            },

            {
              protocol: 'https',
              hostname: 'assets.aceternity.com',
  
            },

            {
              protocol: 'https',
              hostname: 'media.licdn.com',
  
            },
           
            {
              protocol: 'https',
              hostname: 'www.upgrad.com',
  
            },
            {
              protocol: 'https',
              hostname: 'hkga9exljh.ufs.sh',
  
            },
          ],
    }
};

export default nextConfig;

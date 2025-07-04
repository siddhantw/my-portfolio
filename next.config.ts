import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Experimental features for better build performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Webpack configuration to handle caching issues
  webpack: (config, { dev, isServer }) => {
    // Configure caching strategy to prevent snapshot issues
    if (!dev) {
      // Use memory cache instead of persistent cache for production builds
      config.cache = {
        type: 'memory',
      };
    } else {
      // Disable cache in development to prevent issues
      config.cache = false;
    }
    
    // Improve module resolution
    config.resolve.symlinks = false;
    
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        framerMotion: {
          name: 'framer-motion',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
          priority: 30,
        },
      };
    }
    
    // Add resolve fallbacks to prevent dependency resolution issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };
    
    // Ignore specific warnings that don't affect functionality
    config.ignoreWarnings = [
      /Failed to parse source map/,
      /Critical dependency: the request of a dependency is an expression/,
    ];
    
    return config;
  },
  
  // Disable source maps in production to reduce build time
  productionBrowserSourceMaps: false,
  
  // Optimize build output
  poweredByHeader: false,
  
  // Add compiler options for better optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Configure output for better performance
  output: 'standalone',
};

export default nextConfig;

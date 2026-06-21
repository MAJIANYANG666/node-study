/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
      const isServer = options.isServer 
      config.module.rules.push({
          test: /\.(png | jpg | jpeg | gif | svg)$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[name].[contenthash].[ext]',
                      outputPath: 'static', //硬盘路径
                      publicPath: '_next/static' // 网站路径
                  }
              }
          ]
      })
  }
}

module.exports = nextConfig

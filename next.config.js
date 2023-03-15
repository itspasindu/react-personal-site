const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};


module.exports = {
  distDir: 'build',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}
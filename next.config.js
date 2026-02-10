module.exports = {
    output: "export",
    images: {
        unoptimized: true, // Required for static export
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

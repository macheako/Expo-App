const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");
const path = require("path");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

// Point to custom transformer
config.transformer = { 
    ...transformer,
    babelTransformerPath: require.resolve(
        path.join(__dirname, "metro.transformer.js"),
    ),
};

// Tell metro to treat .md as a source file
config.resolver = {
    ...resolver,
    // Ensure metro doesn't try to handle the .md as a static asset
    assetExts: resolver.assetExts.filter((ext) => ext !== "md"),
    // Add .md to the list of source file extensions
    sourceExts: [...resolver.sourceExts, "md"],
};
 
//module.exports = withNativewind(config);

module.exports = withNativewind(config, {
    globalClassNamePolyfill: true,
});
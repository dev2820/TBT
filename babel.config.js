module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@assets/*": ["./src/assets"],
          "@router/*": ["./src/router"],
          "@components/*": ["./src/components"],
          "@containers/*": ["./src/containers"],
          "@screens/*": ["./src/screens"],
          "@utils/*": ["./src/utils"],
        },
      },
    ],
  ],
};

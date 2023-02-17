module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@assets/*": ["./src/assets"],
          "@components/*": ["./src/components"],
          "@containers/*": ["./src/containers"],
          "@constants/*": ["./src/constants"],
          "@store/*": ["./src/store"],
          "@modules/*": ["./src/modules"],
          "@screens/*": ["./src/screens"],
          "@utils/*": ["./src/utils"],
        },
      },
    ],
  ],
};

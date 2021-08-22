/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

// react-native >= 0.57

const extraNodeModules = {
  'qb-core': path.resolve(__dirname + '/../common/'),
};
const watchFolders = [path.resolve(__dirname + '/../common/')];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules,
  },
  watchFolders,
};

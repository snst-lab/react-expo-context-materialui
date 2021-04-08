module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@/route.config': './route.config',
            '@/types': './@types/index',
            '@/hooks': './hooks/index',
            '@/constants': './constants/index',
            '@/components': './components/index',
            '@/screens': './screens/index',
            '@/modules': './modules/index',
            '@/store/context': './store/context',
          },
        },
      ],
    ],
  };
};

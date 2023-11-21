import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(config => {
  const { VITE_ONLY_LOCALES } = loadEnv(config.mode, process.cwd());
  return {
    plugins: [
      vue(),
      VueI18nPlugin({
        compositionOnly: true,
        include: resolve(__dirname, './src/locales/**/*.json'),
      }),
      dts({ rollupTypes: true }),
    ],
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'src/index.js'),
        name: 'DataGouvFrComponents',
        // the proper extensions will be added
        fileName: 'data-gouv-fr-components',
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['clipboard', 'dayjs/esm/*', 'markdown-it', 'popmotion', 'vue', 'vue-i18n'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
            vueI18n: "VueI18n",
          },
        },
      },
    },
  };
});

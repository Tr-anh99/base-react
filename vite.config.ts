import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.join(__dirname, 'src'),
      '@': path.join(__dirname, 'node_modules'),
      '~bootstrap-scss': path.join(__dirname, 'node_modules/bootstrap-scss'),
    },
  },
  server: {
    // https: {
    //   key: './private.key',
    //   cert: './SSL.pem',
    // },
    //// https:true,
    port: 6868,
    host: true,
    // proxy: {
    //   '/api': {
    //     // target: `${process.env.VITE_apiGateway_Proxy}`,
    //     target: `http://10.21.3.133:8001/api`,
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
    watch: {
      usePolling: true,
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#13c2c2' },
      },
      // ....
    },
  },
  define: {
    'process.env': {},
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
      include: ['**/*.tsx', '**/*.ts', '**/**.tsx'],
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'lodash',
          libDirectory: '',
          camel2DashComponentName: false,
          style: () => {
            return false;
          },
        },
        {
          libName: 'antd',
          style(name) {
            return `antd/es/${name}/style/index.js`;
          },
        },
      ],
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});

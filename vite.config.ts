import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/

export default defineConfig(config => {
  const env = loadEnv(config.mode, process.cwd(), '');

  return {
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
      proxy: {
        ...(env.API_BASE_URL // Proxy API endpoints to the production base URL.
          ? {
              '^/api': {
                target: env.API_BASE_URL,
              },
              '^/socket': {
                target: env.API_BASE_URL,
              },
              '^/storage': {
                target: env.API_BASE_URL,
              },
              '^/uploads': {
                target: env.API_BASE_URL,
              },
            }
          : // Proxy API endpoints a local mock API.
            {}),
      },
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
  };
});

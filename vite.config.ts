import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from '@vant/auto-import-resolver';
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default {
    server: {
        host: '0.0.0.0',
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://172.31.2.18:8181', // 目标服务器地址
                // target: 'http://127.0.0.1:8381', // 目标服务器地址
                changeOrigin: true, // 是否改变源地址
                rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
            },
        },
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [VantResolver()],
        }),
        Components({
            resolvers: [VantResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
};

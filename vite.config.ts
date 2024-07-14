import { type UserConfigExport, type ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { analyzer } from 'vite-bundle-analyzer'
import { resolve } from 'node:path'


export default ({ mode, }: ConfigEnv): UserConfigExport => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
            mode === 'analyz' && analyzer(),
        ],
        resolve: {
            alias: {
                "@": resolve(__dirname, 'src')
            }
        },
        build: {
            rollupOptions: {
                output: {
                    chunkFileNames: "js/[name]-[hash].js",
                    entryFileNames: "js/[name]-[hash].js",
                    assetFileNames: "[ext]/[name]-[hash].[ext]",
                    manualChunks: {
                        vue: ['vue', 'vue-router'],
                        // 'vue-router': ['vue-router'],
                        // dayjs: ['dayjs'],
                        'lodash': ['lodash-es'],
                        // "vueuse": ['@vueuse']
                    }
                }
            },
        }
    }
}
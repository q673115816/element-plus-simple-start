import { type UserConfigExport, type ConfigEnv, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'node:path'
export default ({ mode }: ConfigEnv): UserConfigExport => {
    return {
        plugins: [
            vue(),
        ],
        resolve: {
            alias: {
                "@": resolve(__dirname, 'src')
            }
        },
        build: {
            rollupOptions: {
                output: {
                    chunkFileNames: "static/js/[name]-[hash].js",
                    entryFileNames: "static/js/[name]-[hash].js",
                    assetFileNames: "static/[ext]/[name]-[hash].[ext]"
                }
            }
        }
    }
}
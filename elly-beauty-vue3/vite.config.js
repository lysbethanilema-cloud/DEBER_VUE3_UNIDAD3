import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Elly Beauty MakeUp',
        short_name: 'Elly Beauty',
        description: 'Tienda de productos de maquillaje y belleza',
        theme_color: '#d63384',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        scope: '/',

        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      workbox: {
        navigateFallback: '/index.html',

        runtimeCaching: [
          {
            urlPattern: /^https:\/\/dummyjson\.com\/products\/category\/beauty(?:\?.*)?$/,
            handler: 'NetworkFirst',

            options: {
              cacheName: 'productos-belleza',
              networkTimeoutSeconds: 5,

              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24
              },

              cacheableResponse: {
                statuses: [200]
              }
            }
          },

          {
            urlPattern: /^https:\/\/cdn\.dummyjson\.com\/product-images\/.*/,
            handler: 'CacheFirst',

            options: {
              cacheName: 'imagenes-productos',

              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30
              },

              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
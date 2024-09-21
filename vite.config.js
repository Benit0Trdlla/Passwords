import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        display: 'standalone',
        display_override: ['window-controls-overlay'],
        language: 'es-AR',
        name: 'Genera y gestiona contraseñas',
        short_name: 'Genera y gestiona contraseñas',
        description: 'Genera y gestiona tus contraseñas de forma segura. Puedes crearlas automáticamente o personalizarlas con una palabra específica. Guarda, copia, utiliza y elimina contraseñas fácilmente con una interfaz intuitiva.',
        theme_color: '#212529',
        background_color: '#212529',
        icons: [
          {
            src: 'icon512_rounded.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'icon512_maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
})

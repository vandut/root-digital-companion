import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [
        VitePWA({
          registerType: 'autoUpdate',
          devOptions: {
            enabled: true,
          },
          includeAssets: [
            'icons/favicon.ico',
            'icons/apple-touch-icon.png',
            'icons/pwa-192x192.png',
            'icons/pwa-512x512.png',
            'icons/pwa-maskable-192x192.png',
            'icons/pwa-maskable-512x512.png',
          ],
          manifest: {
            name: 'Root Digital Companion',
            short_name: 'Root Companion',
            description:
              'An interactive turn assistant and rules reference for the Root board game. It guides players through setup and gameplay, dynamically providing context-sensitive rules for the active player\'s faction and turn phase.',
            theme_color: '#1c1917',
            background_color: '#D3C6B0',
            icons: [
              {
                src: 'icons/pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
              },
              {
                src: 'icons/pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
              },
              {
                src: 'icons/pwa-maskable-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
              },
              {
                src: 'icons/pwa-maskable-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
              },
            ],
          },
        }),
      ],
      base: '/root-digital-companion/',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

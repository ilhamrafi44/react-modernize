import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  plugins: [
    svgr(),
    laravel({
      input: ['resources/js/app.jsx'],
      refresh: true,
    }),
    react(), // handles .jsx/.tsx transform
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
      '@modernize': path.resolve(__dirname, 'resources/js/modernize'),
      '@src': path.resolve(__dirname, 'resources/js/modernize'),
      '@tabler/icons': '@tabler/icons-react',
    },
  },

  // Tell esbuild to treat .js files as JSX during dependency scanning
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       '.js': 'jsx',
  //     },
  //   },
  // },

  // App source transform: only treat Modernize .js files as JSX
  // esbuild: {
  //   loader: 'jsx',
  //   include: /resources\/js\/modernize\/.*\.js$/,
  // },
  // If you plan to use SSR later, mirror the same loader for SSR too:
  // ssr: {
  //   noExternal: [],
  //   optimizeDeps: {
  //     esbuildOptions: { loader: { '.js': 'jsx' } },
  //   },
  // },
})

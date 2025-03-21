// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: import.meta.env.VITE_API_URL,
//         secure: false,
//       },
//     },
//   },
//   plugins: [react()],
// });
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL, // Correct way to access environment variable
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [react()],
  };
});

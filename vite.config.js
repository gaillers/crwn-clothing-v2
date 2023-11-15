import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3030,
  },
  
  plugins: [react(), svgr()],
})

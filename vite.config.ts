import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 如果你的仓库名是 username.github.io/my-repo，请将 base 设为 '/my-repo/'
  // 这里设为 './' 可以兼容大多数部署场景
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
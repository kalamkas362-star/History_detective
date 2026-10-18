import { defineConfig } from 'vitest/config'; import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],base:process.env.GITHUB_PAGES==='true'?'/history-detective-1839/':'/',test:{environment:'jsdom',setupFiles:'./src/test-setup.ts'}});

/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr(), tsconfigPaths()],
	server: {
		port: 9000,
		proxy: {
			'/api/': {
				target: 'http://127.0.0.1:9001',
			},
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/lib/vitest/setup.ts',
	},
});

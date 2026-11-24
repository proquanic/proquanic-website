import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import {buildSitemapXml} from './src/utils/sitemap';

function dynamicSitemapPlugin(): Plugin {
  return {
    name: 'proquanic-dynamic-sitemap',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const reqPath = (req.url || '').split('?')[0];
        if (reqPath !== '/sitemap.xml') {
          return next();
        }
        try {
          const mod = await server.ssrLoadModule('/src/utils/sitemap.ts');
          const xml = mod.buildSitemapXml();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(req.method === 'HEAD' ? undefined : xml);
        } catch (err) {
          next(err);
        }
      });
    },
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, 'sitemap.xml'), buildSitemapXml(), 'utf8');
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), dynamicSitemapPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

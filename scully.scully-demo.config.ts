import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */

export const config: ScullyConfig = {
  projectRoot: './apps/scully-demo/src',
  projectName: 'scully-demo',
  spsModulePath: './apps/scully-demo/src/app/app.sps.module.ts',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
  },
};

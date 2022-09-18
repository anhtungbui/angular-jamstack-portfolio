import { ScullyConfig } from '@scullyio/scully';

/** @see https://scully.io/docs/Reference/plugins/types/router/ */
// import './scully/plugins/project-id.plugin';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-portfolio-v2',
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {},
  extraRoutes: ['/projects/larabook', '/projects/stockbay']
};

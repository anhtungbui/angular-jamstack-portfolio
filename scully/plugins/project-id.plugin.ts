import { HandledRoute, registerPlugin } from '@scullyio/scully';

function projectIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([{ route: '/projects/larabook' }, { route: '/projects/stockbay' }]);
}

const validator = async (conf) => [];
registerPlugin('router', 'projectIds', projectIdPlugin, validator);

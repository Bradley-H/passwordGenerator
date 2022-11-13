import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["icon-arrow-right.svg","icon-check.svg","icon-copy.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-77fe430c.js","imports":["_app/immutable/start-77fe430c.js","_app/immutable/chunks/index-a722e2f6.js","_app/immutable/chunks/singletons-2f47a5f2.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});

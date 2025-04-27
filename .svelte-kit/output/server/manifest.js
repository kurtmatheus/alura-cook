export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icones/categorias_ingredientes/acucares_e_adocantes.png","icones/categorias_ingredientes/doces_e_guloseimas.png","icones/categorias_ingredientes/farinhas_e_fermentos.png","icones/categorias_ingredientes/frutas_frescas.png","icones/categorias_ingredientes/frutas_secas.png","icones/categorias_ingredientes/graos_cerais_e_leguminosas.png","icones/categorias_ingredientes/hortalicas_e_verduras.png","icones/categorias_ingredientes/laticinios_e_ovos.png","icones/categorias_ingredientes/oleos_gorduras_e_vinagres.png","icones/categorias_ingredientes/paes_e_massas.png","icones/categorias_ingredientes/proteinas_animais.png","icones/categorias_ingredientes/temperos_e_especiarias.png","icones/close.svg","icones/registered.png","imagens/alura-cook-logo.svg","imagens/footer.png","imagens/header.png","imagens/receitas/alho_assado.png","imagens/receitas/arroz_de_alho.png","imagens/receitas/bacalhau_com_chips_de_alho.png","imagens/receitas/creme_de_galinha.png","imagens/receitas/macarrao_de_alho_e_oleo.png","imagens/receitas/manteiga_com_tomilho_e_alho.png","imagens/receitas/milkshake_de_chocolate.png","imagens/receitas/mousse_de_chocolate.png","imagens/receitas/panqueca.png","imagens/receitas/pao_de_alho.png","imagens/receitas/pasta_de_alho_assado.png","imagens/receitas/pate_de_alho_assado.png","imagens/receitas/tortei.png","imagens/textura-marmore.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.odkMMibD.js",app:"_app/immutable/entry/app.B7QYiKMa.js",imports:["_app/immutable/entry/start.odkMMibD.js","_app/immutable/chunks/CCEGnHUT.js","_app/immutable/chunks/DQBsw550.js","_app/immutable/chunks/C_Ci6eF-.js","_app/immutable/entry/app.B7QYiKMa.js","_app/immutable/chunks/C_Ci6eF-.js","_app/immutable/chunks/Bhi9lgt6.js","_app/immutable/chunks/C_xSMrQW.js","_app/immutable/chunks/D8WkasEP.js","_app/immutable/chunks/DQBsw550.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/receitas",
				pattern: /^\/receitas\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

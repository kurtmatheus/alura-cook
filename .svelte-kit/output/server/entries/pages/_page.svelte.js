import { A as push, I as store_get, F as escape_html, J as unsubscribe_stores, E as bind_props, D as pop, G as ensure_array_like, N as attr, O as stringify, P as head } from "../../chunks/index.js";
import { C as Card, T as Titulo, a as TagLink } from "../../chunks/TagLink.js";
import { m as minhaLista, T as Tag } from "../../chunks/minhaLista.js";
import "../../chunks/client.js";
const categorias = [
  {
    nome: "Laticínios e Ovos",
    ingredientes: [
      "Ovos",
      "Queijo",
      "Leite",
      "Manteiga",
      "Creme de Leite",
      "Iogurte",
      "Leite Condensado",
      "Sorvete"
    ],
    imagem: "laticinios_e_ovos.png"
  },
  {
    nome: "Farinhas e Fermentos",
    ingredientes: [
      "Farinha de trigo",
      "Povilho",
      "Farinha de rosca",
      "Canjica",
      "Farinha de mandioca",
      "Fubá",
      "Linhaça",
      "Fermento químico"
    ],
    imagem: "farinhas_e_fermentos.png"
  },
  {
    nome: "Temperos e Especiarias",
    ingredientes: [
      "Canela",
      "Cravo",
      "Orégano",
      "Noz moscada",
      "Tomilho",
      "Pimenta do Reino",
      "Cominho"
    ],
    imagem: "temperos_e_especiarias.png"
  },
  {
    nome: "Óleos, Gorduras e Vinagres",
    ingredientes: [
      "Vinagre",
      "Óleo",
      "Dendê",
      "Azeite de Oliva",
      "Banha",
      "Aceto Balsâmico",
      "Óleo de coco"
    ],
    imagem: "oleos_gorduras_e_vinagres.png"
  },
  {
    nome: "Hortaliças e Verduras",
    ingredientes: [
      "Cebola",
      "Alho",
      "Tomate",
      "Abóbora",
      "Abobrinha",
      "Batata",
      "Pimentão",
      "Espinafre",
      "Cenoura"
    ],
    imagem: "hortalicas_e_verduras.png"
  },
  {
    nome: "Açúcares e Adoçantes",
    ingredientes: [
      "Açúcar branco",
      "Açúcar mascavo",
      "Açúcar cristal",
      "Melado",
      "Mel",
      "Baunilha",
      "Glucose",
      "Xilito",
      "Stevia"
    ],
    imagem: "acucares_e_adocantes.png"
  },
  {
    nome: "Proteínas Animais",
    ingredientes: [
      "Peixe",
      "Carne bovina",
      "Carne de porco",
      "Frango",
      "Bacon",
      "Salsicha",
      "Atum",
      "Salmão",
      "Presunto",
      "Bacalhau"
    ],
    imagem: "proteinas_animais.png"
  },
  {
    nome: "Grãos, Cereais e Leguminosas",
    ingredientes: [
      "Arroz",
      "Feijão",
      "Aveia",
      "Ervilha",
      "Lentilha",
      "Grão de bico",
      "Milho",
      "Gergelim",
      "Quinoa"
    ],
    imagem: "graos_cerais_e_leguminosas.png"
  },
  {
    nome: "Frutas frescas",
    ingredientes: [
      "Banana",
      "Maçã",
      "Uva",
      "Pera",
      "Limão",
      "Morango",
      "Ameixa",
      "Framboesa",
      "Acabaxi"
    ],
    imagem: "frutas_frescas.png"
  },
  {
    nome: "Frutas secas",
    ingredientes: [
      "Castanha de caju",
      "Castanha do pará",
      "Uva passa",
      "Damasco",
      "Tâmara",
      "Pistache",
      "Amêndoa",
      "Amendoim"
    ],
    imagem: "frutas_secas.png"
  },
  {
    nome: "Pães e Massas",
    ingredientes: [
      "Pão",
      "Pão sírio",
      "Tortilha",
      "Macarrão",
      "Nhoque",
      "Massa de pastel",
      "Massa de lasanha",
      "Biscoito",
      "Broa"
    ],
    imagem: "paes_e_massas.png"
  },
  {
    nome: "Doces e guloseimas",
    ingredientes: [
      "Chocolate",
      "Geleia",
      "Goiabada",
      "Caramelo",
      "Chantilly",
      "Cacau em pó",
      "Suspiro",
      "Gelatina",
      "Paçoca"
    ],
    imagem: "doces_e_guloseimas.png"
  }
];
function IngredienteSelecionavel($$payload, $$props) {
  push();
  var $$store_subs;
  let selecionado;
  let ingrediente = $$props["ingrediente"];
  selecionado = store_get($$store_subs ??= {}, "$minhaLista", minhaLista).includes(ingrediente);
  $$payload.out += `<button class="svelte-1lh3y25">`;
  Tag($$payload, {
    ativa: selecionado,
    children: ($$payload2) => {
      $$payload2.out += `<!---->${escape_html(ingrediente)}`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></button>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { ingrediente });
  pop();
}
function Categoria($$payload, $$props) {
  push();
  let categoria = $$props["categoria"];
  Card($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(categoria.ingredientes);
      $$payload2.out += `<div class="categoria-container svelte-1xmbjvc"><img${attr("src", `/icones/categorias_ingredientes/${stringify(categoria.imagem)}`)}${attr("alt", categoria.nome)} class="categoria-imagem svelte-1xmbjvc"> <h3 class="categoria-nome svelte-1xmbjvc">${escape_html(categoria.nome)}</h3> <ul class="ingredientes svelte-1xmbjvc"><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let ingrediente = each_array[$$index];
        $$payload2.out += `<li>`;
        IngredienteSelecionavel($$payload2, { ingrediente });
        $$payload2.out += `<!----></li>`;
      }
      $$payload2.out += `<!--]--></ul></div>`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { categoria });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$minhaLista", minhaLista).length === 0;
  const each_array = ensure_array_like(categorias);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Alura Cook</title>`;
  });
  $$payload.out += `<main>`;
  Titulo($$payload, {
    tag: "h1",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Ingredientes`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="info svelte-1y9b9fl"><p class="svelte-1y9b9fl">Selecione abaixo os ingredientes que você deseja usar nesta
            refeição:</p> <p class="svelte-1y9b9fl">*Atenção: consideramos que você tenha em casa sal, pimenta e água.</p></div> <ul class="categorias svelte-1y9b9fl"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let categoria = each_array[$$index];
    $$payload.out += `<li>`;
    Categoria($$payload, { categoria });
    $$payload.out += `<!----></li>`;
  }
  $$payload.out += `<!--]--></ul> <div class="buscar-receitas svelte-1y9b9fl">`;
  TagLink($$payload, {
    href: "/receitas",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Buscar Receitas`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};

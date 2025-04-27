import { R as css_props, E as bind_props, D as pop, A as push, N as attr, F as escape_html, O as stringify, I as store_get, G as ensure_array_like, P as head, J as unsubscribe_stores } from "../../../chunks/index.js";
import { C as Card, T as Titulo, a as TagLink } from "../../../chunks/TagLink.js";
import { m as minhaLista } from "../../../chunks/minhaLista.js";
function Receita($$payload, $$props) {
  push();
  let receita = $$props["receita"];
  css_props($$payload, true, { "--largura": "280px" }, () => {
    Card($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<img${attr("src", `/imagens/receitas/${stringify(receita.imagem)}`)}${attr("alt", receita.nome)} class="receita-img svelte-fuj62j"> <div class="receita-info svelte-fuj62j"><h3 class="receita-nome svelte-fuj62j">${escape_html(receita.nome)}</h3></div>`;
      },
      $$slots: { default: true }
    });
  });
  bind_props($$props, { receita });
  pop();
}
const receitas = [
  {
    nome: "Pasta de Alho Assado",
    ingredientes: [
      "Alho",
      "Azeite de Oliva"
    ],
    imagem: "pasta_de_alho_assado.png"
  },
  {
    nome: "Patê de Alho Assado",
    ingredientes: [
      "Alho",
      "Azeite de Oliva"
    ],
    imagem: "pate_de_alho_assado.png"
  },
  {
    nome: "Alho Assado",
    ingredientes: [
      "Alho",
      "Azeite de Oliva",
      "Orégano"
    ],
    imagem: "alho_assado.png"
  },
  {
    nome: "Arroz de Alho",
    ingredientes: [
      "Arroz",
      "Alho",
      "Óleo"
    ],
    imagem: "arroz_de_alho.png"
  },
  {
    nome: "Pão de Alho",
    ingredientes: [
      "Pão",
      "Manteiga",
      "Alho",
      "Orégano"
    ],
    imagem: "pao_de_alho.png"
  },
  {
    nome: "Macarrão de Alho e Óleo",
    ingredientes: [
      "Macarrão",
      "Alho",
      "Óleo",
      "Manteiga"
    ],
    imagem: "macarrao_de_alho_e_oleo.png"
  },
  {
    nome: "Bacalhau com chips de alho",
    ingredientes: [
      "Bacalhau",
      "Alho",
      "Azeite de Oliva",
      "Limão"
    ],
    imagem: "bacalhau_com_chips_de_alho.png"
  },
  {
    nome: "Manteiga com tomilho e alho",
    ingredientes: [
      "Manteiga",
      "Alho",
      "Tomilho"
    ],
    imagem: "manteiga_com_tomilho_e_alho.png"
  },
  {
    nome: "Tortei com recheio de Abóbora",
    ingredientes: [
      "Massa de pastel",
      "Abóbora",
      "Tomate",
      "Alho",
      "Óleo",
      "Farinha de rosca",
      "Noz moscada"
    ],
    imagem: "tortei.png"
  },
  {
    nome: "Creme de Galinha",
    ingredientes: [
      "Frango",
      "Leite",
      "Creme de Leite",
      "Milho",
      "Ovos"
    ],
    imagem: "creme_de_galinha.png"
  },
  {
    nome: "Panqueca",
    ingredientes: [
      "Farinha de trigo",
      "Manteiga",
      "Leite",
      "Ovos"
    ],
    imagem: "panqueca.png"
  },
  {
    nome: "Milkshake de chocolate",
    ingredientes: [
      "Chocolate",
      "Chantilly"
    ],
    imagem: "milkshake_de_chocolate.png"
  },
  {
    nome: "Mousse de chocolate",
    ingredientes: [
      "Creme de Leite",
      "Chocolate",
      "Ovos",
      "Manteiga"
    ],
    imagem: "mousse_de_chocolate.png"
  }
];
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let receitasFiltradas;
  receitasFiltradas = receitas.filter((receita) => receita.ingredientes.every((ingrediente) => store_get($$store_subs ??= {}, "$minhaLista", minhaLista).includes(ingrediente)));
  const each_array = ensure_array_like(receitasFiltradas);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Alura Cook | Receitas</title>`;
  });
  $$payload.out += `<main>`;
  Titulo($$payload, {
    tag: "h1",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Receitas`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="info svelte-n304vi"><p class="verde svelte-n304vi">Resultados Encontrados: ${escape_html(receitasFiltradas.length)}</p> `;
  if (receitasFiltradas.length) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="svelte-n304vi">Veja as opções de receitas que encontramos com os ingredientes
                que você tem por aí</p>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="svelte-n304vi">Não encontramos receitas com os igredientes selecionados.</p>`;
  }
  $$payload.out += `<!--]--></div> <ul class="receitas svelte-n304vi"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let receita = each_array[$$index];
    $$payload.out += `<li>`;
    Receita($$payload, { receita });
    $$payload.out += `<!----></li>`;
  }
  $$payload.out += `<!--]--></ul> <div class="editar-lista svelte-n304vi">`;
  TagLink($$payload, {
    href: "/",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Voltar à Página Principal`;
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

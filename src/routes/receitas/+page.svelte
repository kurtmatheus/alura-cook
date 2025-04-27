<script>
    import Titulo from "$components/compartilhados/Titulo.svelte";
    import Receita from "$components/paginas/receitas/Receita.svelte";

    import receitas from "$lib/json/receitas.json";
    import { minhaLista } from "$lib/stores/minhaLista";

    $: receitasFiltradas = receitas.filter((receita) =>
        receita.ingredientes.every((ingrediente) =>
            $minhaLista.includes(ingrediente)
        )
    );

    console.log(receitas);
    console.log($minhaLista);
    console.log(receitasFiltradas);
</script>

<svelte:head>
    <title>Alura Cook | Receitas</title>
</svelte:head>

<main>
    <Titulo tag="h1">Receitas</Titulo>

    <div class="info">
        <p class="verde">Resultados Encontrados: {receitasFiltradas.length}</p>

        {#if receitasFiltradas.length}
            <p>
                Veja as opções de receitas que encontramos com os ingredientes
                que você tem por aí
            </p>
        {:else}
            <p>Não encontramos receitas com os igredientes selecionados.</p>
        {/if}
    </div>

    <ul class="receitas">
        {#each receitasFiltradas as receita (receita.nome)}
            <li>
                <Receita {receita} />
            </li>
        {/each}
    </ul>
</main>

<style>
    .info {
        margin-bottom: 3.375rem;
    }

    .info > p {
        line-height: 2rem;
    }

    .info > p.verde {
        color: var(--verde);
    }

    .receitas {
        text-align: start;
        margin-bottom: 3.75rem;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
    }
</style>

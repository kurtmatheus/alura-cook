<script lang="ts">
    import { minhaLista } from "$lib/stores/minhaLista";

    import Tag from "./Tag.svelte";

    export let ingrediente: string;

    $: selecionado = $minhaLista.includes(ingrediente);

    function onClick() {
        selecionado = !selecionado

        if (selecionado) {
            minhaLista.adicionarIngrediente(ingrediente);
        } else {
            minhaLista.removerIngrediente(ingrediente);
        }
    }
</script>

<button on:click={onClick}>
    <Tag ativa={selecionado}>{ingrediente}</Tag>
</button>

<style>
    button {
        cursor: pointer;
    }
</style>
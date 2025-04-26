<script lang="ts">
    import { minhaLista } from "$lib/stores/minhaLista";


    import Tag from "./Tag.svelte";

    let selecionado: boolean = false;

    export let ingrediente: string;

    function onClick() {
        selecionado = !selecionado

        if (selecionado) {
            $minhaLista = [...$minhaLista, ingrediente];
        } else {
            $minhaLista = $minhaLista.filter((s) => s !== ingrediente);
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
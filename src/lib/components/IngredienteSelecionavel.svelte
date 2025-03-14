<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Tag from "./Tag.svelte";

    const dispatcher = createEventDispatcher<{
        aoAdicionarIngrediente: string,
        aoRemoverIngrediente: string
    }>();

    let selecionado: boolean = false;

    export let ingrediente: string;

    function onClick() {
        selecionado = !selecionado

        if (selecionado) {
            dispatcher("aoAdicionarIngrediente", ingrediente);
        } else {
            dispatcher("aoRemoverIngrediente", ingrediente);
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
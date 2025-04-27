<script>

    import Tag from "./Tag.svelte";

    export let href = "";
    export let desabilitada = false;
</script>
<a {href}
    style:pointer-events={desabilitada ? 'none' : ''}
>
    <Tag 
        ativa={true} 
        tamanho="lg"
        desabilitada={desabilitada}
    >
        <slot></slot>
    </Tag>
</a>
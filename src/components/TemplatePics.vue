<script setup>

defineProps({
    picData: Object,
    titre: String,
});

</script>

<template>
    <img :src="picData.url" alt="">
    <p>
        <slot>{{ picData.title }}</slot>
    </p>
</template>
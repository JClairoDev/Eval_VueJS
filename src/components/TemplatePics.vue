<script setup>

defineProps({
    picData: Object,
    titre: String,
});

</script>

<template>
    <img :src="picData.url" alt="">
    <template v-if="titre != 'default'">
        <p>{{ titre }}</p>
    </template>
    <template v-else>
        <p>{{ picData.title }}</p>
    </template>
</template>
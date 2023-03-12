<script setup>
defineProps({
    picData: Object,
});

</script>

<template>
    <img :src="picData.url" alt="">
    <p>
        <slot>{{ picData.title }}</slot>
    </p>
</template>
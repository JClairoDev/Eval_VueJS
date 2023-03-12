
<script setup>
import TemplatePics from '../components/TemplatePics.vue';
import { useListePhoto } from '../stores/storePics';
const store = useListePhoto();
</script>

<template>
    <div class="about">
        <h1>Affichage des Photos</h1>
        <ul>
            <li v-for="picData of store.data" :key="picData.id">
                <div class="popup">
                    <TemplatePics :picData=picData>je suis le nouveau titre</TemplatePics>
                    <button @click="store.supprimer(picData)">supprimer</button>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}

.popup {
    border-radius: 4px;
    border: solid 1px #333;
    overflow: hidden;
    margin-bottom: 25px;
    margin-top: 10px;
}
</style>
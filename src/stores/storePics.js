import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useListePhoto = defineStore('ListePhoto', () => {

    const data = ref([]);

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => {
            for (const j of json) {
                data.value.push(j);
            }
        }
        );

    function supprimer(picData) {
        const index = data.value.indexOf(picData);
        data.value.splice(index, 1);
    }

    return { data, supprimer };

});
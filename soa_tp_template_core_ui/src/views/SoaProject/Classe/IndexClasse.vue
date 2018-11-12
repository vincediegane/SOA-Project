<template>
    <div>
        Index Classe
        <router-link to="/">Home</router-link>
        <br>
        <br>
        {{all_classes}}
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            all_classes: []
        }
    },

    mounted () {
        console.log('All Classe called !!!')
        axios({
            url: 'http://localhost:8080/listClasse',
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
                .then((response) => {
                    this.all_classes = response.data
                })
                .catch((error) => {
                    console.error(error)
                })
        })
    }
}
</script>

<style>

</style>

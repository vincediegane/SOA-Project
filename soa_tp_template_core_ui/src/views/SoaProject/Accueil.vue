<template>
    <div>
        Accueil
        <ul>
            <router-link to="/classe">Classes</router-link>
            <router-link to="/classe/add">Add Classes</router-link>
            <router-link to="/classe/detail">Detail Classe</router-link>
        </ul>
            <br>
            <br>
            <ul v-for="data in datas" :key="data.codedepartement" align="center">
                <li>{{data.codedepartement}}</li>
                <li>{{data.libelledepartement}}</li>
            </ul>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
            datas: []
        }
    },
    mounted () {
        axios ({
            url: 'http://localhost:8080/listDepartement',
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => {
                this.datas = response.data
            })
            .catch((error) => {console.error(error)})
    }
}
</script>

<style>

</style>

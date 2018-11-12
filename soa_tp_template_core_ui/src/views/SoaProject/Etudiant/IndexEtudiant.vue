<template>
    <div>
        <b-row>
          <b-col cols="2" xl="8" offset="2">
            <transition name="slide">
            <b-card :header="caption">
              <b-input type="text" placeholder="search" v-model="search" />
              <b-table
                :hover="hover"
                :striped="striped"
                :bordered="bordered"
                :small="small"
                :fixed="fixed" responsive="sm" 
                :items="all_etudiants" 
                :fields="fields"
                :filter="search"
                :current-page="currentPage" 
                :per-page="perPage" 
                @row-clicked="rowClicked">

                <template slot="codefaculte" slot-scope="data">
                  <strong>{{data.item.codefaculte}}</strong>
                </template>
                <template slot="libellefaculte" slot-scope="data">
                  <strong>{{data.item.libellefaculte}}</strong>
                </template>
                <template slot="actions" slot-scope="data">
                  <router-link :to="{name: 'Detail', params: {id: data.item.numeroetudiant}}"><b-button block variant="primary">Detail</b-button></router-link>
                  <router-link :to="{name: 'Edit', params: {id: data.item.numeroetudiant}}"><b-button block variant="light">Edit</b-button></router-link>
                </template>
              </b-table>
              <nav v-if="all_etudiants.length > perPage">
                <b-pagination size="sm" :total-rows="all_etudiants.length" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
              </nav>
            </b-card>
            </transition>
          </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from "axios";
export default {
    props: {
    caption: {
      type: String,
      default: 'Etudiants'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      all_etudiants: [],
      fields: [
        { key: "numeroetudiant" },
        { key: "email" },
        { key: "nom" },
        { key: "prenom" },
        { key: "actions" }
      ],
      search: '',
      currentPage: 1,
      perPage: 5,
      totalRows: 0
    };
  },

  mounted() {
    console.log("All FAculte called !!!");
    axios.get("http://localhost:8080/listEtudiant").then(response => {
      console.log(response.data);
      this.all_etudiants = response.data;
    });
  },

  methods: {
    rowClicked (item) {
      this.$router.push('/etudiant/'+this.$route.params.id+'/detail')
      /* this.$router.push({path: Detail}) */
    }
  }
}
</script>

<style>
</style>

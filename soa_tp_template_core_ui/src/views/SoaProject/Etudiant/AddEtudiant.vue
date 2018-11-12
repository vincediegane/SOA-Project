<template>
    <div>
      <b-row>
        <b-col sm="6" offset="3">
          <b-card>
            <form @submit.prevent="addEtudiant">
            <div slot="header">
              <strong>Add new Etudiant </strong> <small>Form</small>
            </div>
            <b-row>
              <b-col sm="12">
                <b-form-group>
                  <label for="code">Email</label>
                  <b-form-input type="text" id="code" placeholder="Enter student mail" v-model="etudiant.email"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12">
                <b-form-group>
                  <label for="nom">Name</label>
                  <b-form-input type="text" id="nom" placeholder="Enter the student Name" v-model="etudiant.nom"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12">
                <b-form-group>
                  <label for="prenom">Prenom</label>
                  <b-form-input type="text" id="prenom" placeholder="Enter the student fristame" v-model="etudiant.prenom"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12">
                <b-form-group>
                  <label for="promo">Promo</label>
                  <b-form-select id="promo"
                    :plain="true"
                    :options="promo"
                    v-model="etudiant.id_promo">
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
            <div class="form-actions">
              <b-button type="submit" @click="addEtudiant" variant="primary">Submit</b-button>
              <b-button type="button" variant="secondary">
                <router-link :to="{name: 'All'}">
                  Cancel
                </router-link>
              </b-button>
            </div>
            </form>
          </b-card>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      etudiant: {
        numeroetudiant: "",
        email: "",
        nom: "",
        prenom: "",
        id_promo: "",
        note: []
      },
      last_etudiant: {},
      all_promo: []
    };
  },
  computed: {
    promo() {
      return this.all_promo.map(item => item.annee);
    },
    id_promo() {
      return this.all_promo.map(item => item.id_promo);
    }
  },
  mounted() {
    /* console.log("All etudiants called !!!");
    axios.get("http://localhost:8080/listEtudiant").then(response => {
      if (!response.data.length) {
        this.index = 400;
      } else {
        this.last_etudiant = response.data[response.data.length - 1];
        this.index = this.last_etudiant.numeroetudiant + 1;
      }
    }); */
    // All Promo
    axios.get("http://localhost:8080/listPromotion").then(response => {
      this.all_promo = response.data;
    });
  },
  methods: {
    addEtudiant() {
      console.log("Add etudiant called !!!");
      let index = 400
      this.etudiant.numeroetudiant = index
      axios
        .post("http://localhost:8080/listEtudiant", {
          body: this.etudiant
        })
        .then(response => {
          console.log(this.etudiant);
        })
        .catch(e => {
          /* this.errors.push(e) */
          console.error(e);
        });
        index++
    }
  }
};
</script>

<style>
</style>

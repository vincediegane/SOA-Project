<template>
    <div>
      <b-row>
        <b-col sm="6" offset="3">
          <b-card>
            <form @submit.prevent="addEtudiant">
            <div slot="header">
              <strong>Add new Etudiant&nbsp;&nbsp;</strong> <small>Form</small>
            </div>
            <b-row>
              <b-col sm="12">
                <b-form-group>
                  <label for="num">Numero etudiant</label>
                  <b-form-input type="text" id="num" placeholder="Enter student Number" v-model="etudiant.numeroetudiant"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12">
                <b-form-group>
                  <label for="mail">Email</label>
                  <b-form-input type="text" id="mail" placeholder="Enter student mail" v-model="etudiant.email"></b-form-input>
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
                  <b-form-input type="text" id="prenom" placeholder="Enter the student first name" v-model="etudiant.prenom"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <!-- <b-row>
              <b-col sm="12">
                <b-form-group>
                  <label for="classe">Classe</label>
                  <b-form-select id="classe"
                    :plain="true"
                    :options="classCode"
                    v-model="etudiant.codeclasse">
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row> -->
            <b-row>
              <b-col sm="12">
                <b-form-group>
                  <label for="promo">Promotion</label>
                  <b-form-select id="promo"
                    :plain="true"
                    :options="promoCode"
                    v-model="etudiant.annee">
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
      /*   codeclasse: "", */
        annee: ""
      },
      last_etudiant: {},
      all_promo: []
    };
  },
  computed: {
    promoCode() {
      return this.all_promo.map(item => item.annee);
    }
  },
  mounted() {
    // All Promo
    console.log('All Promo called !!!')
    axios.get("http://localhost:8080/listPromotion").then(response => {
      this.all_promo = response.data;
    });
    /* // All Classes called !!!
    console.log('All classes called !!!')
    axios.get("http://localhost:8080/listClasse").then(response => {
      this.all_classe = response.data;
    }); */
  },
  methods: {
    addEtudiant() {
      console.log("Add etudiant called !!!");
      axios
        .post("http://localhost:8080/saveEtudiant", {
          body: this.etudiant
        })
        .then(response => {
          console.log(this.etudiant);
        })
        .catch(e => {
          
          console.error(e);
        });
    }
  }
};
</script>

<style>
</style>

<template>
    <div>
      <b-row>
        <b-col sm="6" offset="3">
          <b-card>
            <form @submit.prevent="editEtudiant">
            <div slot="header">
              <strong>Edit Etudiant &nbsp;&nbsp;</strong> <small>Form</small>
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
            <b-row>
              <b-col sm="12">
                <b-form-group>
                  <label for="promo">Promo</label>
                  <b-form-select id="promo"
                    :plain="true"
                    :options="promoCode"
                    :value="promoCode"
                    v-model="etudiant.annee">
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
            <div class="form-actions">
              <b-button type="submit" @click="editEtudiant" variant="primary">Submit</b-button>
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
    axios.get("http://localhost:8080/listPromotion/" + this.$route.params.id).then(response => {
      this.etudiant = response.data;
    });
  },
  methods: {
    editEtudiant() {
      console.log("Edit etudiant called !!!");
      
    }
  }
};
</script>

<style>
</style>

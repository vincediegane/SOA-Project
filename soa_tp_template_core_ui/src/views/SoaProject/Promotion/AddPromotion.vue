<template>
    <div>
      <b-row>
        <b-col sm="6" offset="3">
          <b-card>
            <form @submit.prevent="addPromotion">
            <div slot="header">
              <strong>Add new Promotion&nbsp;&nbsp;</strong> <small>Form</small>
            </div>
            <b-row>
              <b-col sm="12">
                <b-form-group>
                  <label for="num">Année promotion</label>
                  <b-form-input type="text" id="num" placeholder="Entrer l'année de la Promotion" v-model="promotion.annee"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12">
                <b-form-group>
                  <label for="classe">Classe</label>
                  <b-form-select id="classe"
                    :plain="true"
                    :options="classCode"
                    v-model="promotion.codeclasse">
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
            <div class="form-actions">
              <b-button type="submit" @click="addPromotion" variant="primary">Submit</b-button>
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
      promotion: {
        annee: "",
        codeclasse: ""
      },
      all_classe: []
    };
  },
  computed: {
    classCode() {
      return this.all_classe.map(item => item.codeclasse);
    }
  },
  mounted() {
    // All Classes called !!!
    console.log("All classes called !!!");
    axios.get("http://localhost:8080/listClasse").then(response => {
      this.all_classe = response.data;
    });
  },
  methods: {
    addPromotion() {
      console.log("Add promotion called !!!");
      axios.post('http://localhost:8080/listPromotion', {
        body: this.promotion
      })
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
};
</script>

<style>
</style>

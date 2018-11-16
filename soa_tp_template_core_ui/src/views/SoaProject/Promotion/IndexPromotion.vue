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
                :items="all_promotion" 
                :fields="fields"
                :filter="search"
                :current-page="currentPage" 
                :per-page="perPage">

                <template slot="annee" slot-scope="data">
                  <strong>{{data.item.annee}}</strong>
                </template>
                <!-- <template slot="etat" slot-scope="data">
                  <strong>{{data.item.etat}}</strong>
                </template> -->
              </b-table>
              <nav v-if="all_promotion.length > perPage">
                <b-pagination size="sm" :total-rows="all_promotion.length" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
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
      default: "Promotion"
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
    },
    data() {
      return {
        all_promotion: [],
        search: "",
        currentPage: 1,
        perPage: 5,
        totalRows: 0,
        fields: [{ key: "annee" }, { key: "etat" }]
      };
    },
    mounted() {
      console.log("All Promotion called !!!");
      axios
        .get("http://localhost:8080/listPromotion")
        .then(Response => {
          this.all_promotion = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  data() {
    return {
      search: "",
      perPage: 5,
      currentPage: 1,
      totalRows: 0,
      fields: [{ key: "annee" }],
      all_promotion: []
    };
  },
  mounted(){
      console.log('All promotion called !!!')
      axios.get('http://localhost:8080/listPromotion')
        .then(response => {
            this.all_promotion = response.data
        })
        .catch(err => {
            console.error(err)
        })
  }
};
</script>

<style>
</style>

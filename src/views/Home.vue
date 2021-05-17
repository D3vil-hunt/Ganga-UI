<template>
<div>
  <div class="home" v-show="!searchState">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to Ganga
          </h1>
          <h2 class="subtitle">
            BEST PRODUCTS AT LOW PRICES
          </h2>
        </div>
      </div>
    </section>
    <!-- todays deal -->
    <ELists :list='list' />
    <!-- search -->
  </div>
  <EListsSearch v-if="searchState" :list='searchResults' />
  <EListRecommend v-if="$store.getters.getToken != null"/>
</div>
</template>

<script>
import ELists from '../components/ELists';
import EListsSearch from '../components/EListsSearch';
import EventService from '@/services/EventService.js'
import EListRecommend from '../components/EListRecommend'
const client = EventService.getApiClient();
export default {
  name: 'home',
  components: {
    ELists,
    EListsSearch,
    EListRecommend
  },
  data(){
    return{
      list : null,
      search: null,

    }
      
  },
  computed:{
    searchResults(){
      return this.$store.getters.getSearchResults;
    },
    searchState(){
      return this.$store.getters.getSearchState;
    }
  },
  created(){
    
    client.get('/product-service/deals/get_todays_deals')
    .then(response => {
      this.list = response.data;
    })
    .catch(error => {
      console.log(error);
    })
  }
}

</script>

<style lang="scss" scoped>
  .hero {
    text-align: center;
    background-image: url('https://web-design-india.com/wp-content/uploads/2017/09/ecommerce-background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    padding: 10px 0 0 0;
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -230px;

  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
  }
  .is-xl {
    font-size: 1.7rem;
  }
</style>
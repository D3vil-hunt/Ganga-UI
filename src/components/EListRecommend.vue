<template>
  <div class="events container">
    <h2 class="subtitle is-3">
      Recommendations
    </h2>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="element in list " :key="element.id">
        <router-link :to="'/product/' + element.id">
          <Ecard :data="element" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import Ecard from '@/components/Ecard';
  import EventService from '@/services/EventService.js';
  const client = EventService.getApiClient();
  export default {
    name: 'EListRecommend',
    components: {
      Ecard
    },
    data(){return{
      list: null
    }},
    computed: {
    },
    created(){
      client.get('/product-service/recommendation').then(Response =>{
        this.list = Response.data;
      }).catch();
    }
  }
</script>
<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>
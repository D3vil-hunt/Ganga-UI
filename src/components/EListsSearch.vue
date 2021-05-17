<template>
  <div class="events container">
    <h2 class="subtitle is-3">
      Search Results
    </h2>
    <span v-show="list.length == 0">Sorry, no products found. </span>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="element in list " :key="element.id">
         <router-link :to="'/product/' + element.id">
          <EcardSearch :data="element" />
          
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import EcardSearch from '@/components/EcardSearch';
  export default {
    name: 'EListsSearch',
    components: {
      EcardSearch
    },
    props: ['list'],
    data(){return{

    }},
    computed: {
    },
  }
</script>
<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>
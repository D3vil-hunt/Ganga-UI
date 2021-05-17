<template>
  <div class="events container">
    <h2 class="subtitle is-3">
      Todays Deal
    </h2>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="element in list " :key="element.id">
        <router-link :to="'/product/' + element.productId">
          <Ecard :data="element" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import Ecard from '@/components/Ecard';
  export default {
    name: 'ELists',
    components: {
      Ecard
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
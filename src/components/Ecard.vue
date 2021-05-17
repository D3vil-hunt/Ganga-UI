<template>
  <div class="event-card">
    <div class="card" :style="{ backgroundImage: 'url(' + data.image + ')' }">
    </div>
    <div class="card-content">
      <h2 class="is-size-4 has-text-weight-bold">{{data.displayName}}</h2>
      <span>{{data.discount}}% Discount</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Ecard',
    props:['data'],
    datat(){
      return{
      }
    },
  }
</script>
<style lang="scss" scoped>
  .card {
    //background-image: url('..//assets//images//iphone.jpeg');
    height: 300px;
    background-position: center;
    background-size: cover;
    text-align: center;
  }
  .card-content {
    padding-top: 50px;
    background-color:white;
    padding: 5px;
    height: 75px;
    color:black;
    font-family: Georgia, Times New Roman, Times, serif;;
    text-decoration: underline white !important;
  }
  .event-card{
     box-shadow: 3px 2px 5px 0px #969696;
  }
</style>
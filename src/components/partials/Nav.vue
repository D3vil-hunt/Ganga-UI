<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-3">GANGA</strong>
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
      <div class="navbar-mid">

        <div class="active-cyan-4 mb-3">
          <input @click="changeSearch" v-model="query" class="form-control" type="text" placeholder="Search"
            aria-label="Search" style="width : 20vw; display: inline" />
          <button @click="getSearchResults(query)" type="button" class="btn btn-primary">Search</button>
        </div>

      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <button @click="loginLogOut" class="button is-dark">{{buttonState}}</button>
        </div>
        <div v-show= "!loginStatus" class="navbar-item">
          <router-link to="/signup" tag="button" class="button is-dark">Sign Up</router-link>
        </div>
        <div v-show= "loginStatus" class="navbar-item">
          <router-link to="/profile" tag="button" class="button is-dark" :user='$store.getters.getUserName'>Profile</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import EventService from '@/services/EventService.js'
const client = EventService.getApiClient();

  export default {
    name: 'Nav',
    methods:{
      changeSearch(){
        this.$store.dispatch('changeSearchState');
      },
      getSearchResults(query){
        client.get("/product-service/search_product/"+query)
        .then(response =>{
          console.log("inside client");
          this.$store.dispatch('commitSearchResults', response.data)
        })
      },
      loginLogOut(){
        if(this.buttonState == 'Sign In'){
          this.$router.push('/login');
        }else{
          this.$store.commit('SET_TOKEN', null);
          this.$store.commit('CLEAR_USER_NAME');
          this.$router.push('/');
        }
      }
    },
    data(){
      return {
        query: null
      }
    },
    computed:{
      buttonState(){
        if(this.$store.state.token !== null){
          return 'Logout';
        }else{
          return 'Sign In'
        }
      },
      loginStatus(){
        if(this.$store.getters.getToken != null){
          return true;
        }else{
          return false;
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    width: 100%;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #d88d00;
      }
    }
  }

  a {
    text-decoration: none;
  }

  .navbar-mid {
    display: inherit;
    align-items: center;
    justify-content: flex-start;
    margin-right: auto;
  }

  .active-cyan-4 input[type=text]:focus:not([readonly]) {
    border: 1px solid #4dd0e1;
    box-shadow: 0 0 0 1px #4dd0e1;
  }
</style>
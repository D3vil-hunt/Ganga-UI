<template>
    <div class="vue-tempalte">
        <form @submit.prevent="">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>User Name</label>
                <input v-model="userName" type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input v-model="password" type="password" class="form-control form-control-lg" />
            </div>
            
            <div class = "button-block" >
                <span v-show="loginSucces" style="font-size: 1rem;" class="badge rounded-pill bg-success">Success</span>
                <span v-show="!loginSucces && loginSucces != null" style="font-size: 1rem;" class="badge rounded-pill bg-danger">Invalid</span>
            </div>
            
            <div class = "button-block">
                <button @click="login" type="submit" class="button is-dark" :style="style">{{button}}</button>
            </div>

        </form>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
    name: "Login",
    data() {
        return {
            userName: null,
            password: null,
            loginSucces: null,
            button: 'Sign In',
            style: "background-color: mediumspringgreen;"
        }
    },
    methods: {
        login() {

            EventService.getApiClient().post('/login-service/login', {
                userName: this.userName,
                password: this.password,
            }).then(response => {
                this.loginSucces = true;
                this.$store.commit('SET_TOKEN', response.data);
                this.$store.commit('SET_USER_NAME', this.userName);
                this.$router.push('/');
            }).catch( ()=>{
                this.loginSucces = false;
                this.style = "background-color: red;";
                this.button = 'Try Again';
            });
        }
    },
    computed:{
        loginStatus(){
            return this.$store.getters.getToken;
        }
    }
}
</script>

<style scoped>
    .vue-tempalte {
        width: 500px;
        border: 1px solid #CCCCCC;
        margin: auto;
        margin-top: 50px;
        padding: 20px;
    }

    h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
    font-weight: bold;
    }

    label{
        margin-top: 40px;
        font-weight: 500;
        font-weight: bold;
    }
    .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    }

    button{
         font-weight: bold;
         color: #2c3e50;
    }

</style>
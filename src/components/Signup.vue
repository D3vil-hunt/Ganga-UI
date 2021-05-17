<template>
    <div class="vue-tempalte">
        <form>
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>User Name</label>
                <input v-model='username' type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input v-model='email' type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input v-model='password1' type="password" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Confirm Password</label>
                <input v-model='password2' type="password" class="form-control form-control-lg" />
            </div>

            <div class = "button-block">
                <button @click="register"   type="button" class="button is-dark">Sign Up</button>
            </div>

            <p> Already registered
                <router-link to="/login">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'
    export default {
        name: 'SignUp',
        data() {
            return {
                username : null,
                email : null,
                password1 : null,
                password2: null
            }
        },
        methods : {
            register(){
                if(this.password1 == this.password2){
                   console.log("hi");
                   EventService.getApiClient().post('/admin-service/admin/register',{
                        userName : this.username,
                        password : this.password1,
                        emailAddress : this.email
                });
                this.username = null;
                this.password1 = null;
                this.password2 = null;
                this.email= null;
                }
            }
        }
    }
    
</script>

<style scoped>
    .vue-tempalte {
        width: 500px;
        border: 1px solid #CCCCCC;
        margin: auto;
        margin-top: 40px;
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
    p{
        margin-top: 15px;
        text-align: right;
        color:darkgrey;
    }

</style>

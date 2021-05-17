<template>
    <div class="vue-tempalte">
        <form>
            <h3>Profile</h3>

            <div class="form-group">
                <label>User Name</label>
                <input v-model='username' type="text" class="form-control form-control-lg" readonly />
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input v-model='email' type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>New Password</label>
                <input v-model='password1' type="password" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Confirm Password</label>
                <input v-model='password2' type="password" class="form-control form-control-lg" />
            </div>

            <div class = "button-block">
                <button @click="update"   type="button" class="button is-dark">Update</button>
            </div>

        </form>
            <div class = "button-block" >
                <span v-show="updateSucces" style="font-size: 1rem;" class="badge rounded-pill bg-success">Success</span>
                <span v-show="!updateSucces && updateSucces != null" style="font-size: 1rem;" class="badge rounded-pill bg-danger">Invalid</span>
            </div>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'
const client = EventService.getApiClient();
    export default {
        name: 'Profile',
        props:['user'],
        data() {
            return {
                username : null,
                email : null,
                password1 : null,
                password2: null,
                updateSucces: null,

            }
        },
        methods : {
            update() {
                    if (this.password1 == this.password2) {
                        console.log("hi");
                        EventService.getApiClient().post("/admin-service/admin/update/"+this.username,{
                            userName: this.username,
                            password: this.password1,
                            emailAddress: this.email

                        }).then( () =>{

                            this.updateSucces = true;
                            this.$router.push('/');

                        }).catch( () =>{

                            this.updateSucces = false;
                        
                        });
                        this.username = null;
                        this.password1 = null;
                        this.password2 = null;
                        this.email = null;
                    }
            }
        },
        created(){
            client.get('/admin-service/admin/get_user/'+this.$store.state.user).then(response =>{
                this.username = response.data.username;
                this.email = response.data.emailAddress;
            });
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

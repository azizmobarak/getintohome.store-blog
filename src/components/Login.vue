<template>
    <main>
    <form @submit="senddata">
    <div>
     <p v-if="this.getmessage!=='success'" style="color:red;font-size:14px;">{{ this.getmessage }}</p>
    </div>
    <div>
    <input @input="changeemail" placeholder="Email" type="email" />
    </div>
    <div>
    <input @input="changepassword" placeholder="Password" type="password" />
    </div>
    <div>
    <input id="btnlogin" value="Login" type="submit" />
    </div>
    <p>You don't have an account yet? <a href="/register">create one</a></p>
    <p>forgot password ? <a href="#">recover it now</a></p>
    </form>
    </main>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';
import Vue from "vue";
import Vuesession from 'vue-session';

Vue.use(Vuesession);

export default {
    name:"Login",
    computed:mapGetters(['getemail','getpassword','getmessage']),
    methods:{
        ...mapActions(['changeemail','changepassword','changemessage']),
        //verify the data from database
       senddata(e){
    e.preventDefault();
        fetch('http://localhost:2222/login',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:this.getemail,
                password:this.getpassword
            })
        }).then(res=>res.json())
          .then(data=>{
              console.log("start")
            if(data.message==="success"){
                console.log(data);
              this.$session.start();
              this.$session.set("access_token","success");
              console.log("session "+this.$session.exist())
              window.location.reload();
          }else{
               return this.changemessage(data.message)
          }
          })
          .catch(e=>console.log(e));
         
       }
    },
     beforeCreate(){
     if(this.$session.exists()){
            this.$router.push({name:"blog"})
     }else{
      this.$router.push({name:"login"})
     }
     this.changemessage('');
    }
   
}
</script>
<style scoped>
main{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: -100px 0 10vh;
    width: 98vw;
}
form{
    display: grid;
    row-gap: 15px;
    width: 50vw;
    box-shadow: orange 0px 5px 5px 2px;
    padding: 10px;
}
form input{
    width:30vw;
    height: 30px;
     border:0.1px orange solid;
}
#btnlogin{
    background-color: rgb(238, 157, 5);
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:1.2vw;
    cursor: pointer;
}
form p{
    margin:-8px 0 1px;
}
</style>
<template>
    <main>
    <p :v-if="message!==null" >
    </p>
    <form>
    <div style="color:red;font-size:12px">
     {{ this.getmessage }}
    </div>
    <div>
    <input @input="changeemail" placeholder="Email" type="email" />
    </div>
    <div>
    <input @input="changename" placeholder="Full name" type="text" />
    </div>
    <div>
    <input placeholder="Password" type="password" />
    </div>
    <div>
    <input @input="changepassword" placeholder="Confirm password" type="password" />
    </div>
    <div>
    <input @click="sendata" id="btnlogin" value="Create Account" type="submit" />
    </div>
    <p>You have an account? <a href="/login">Login</a></p>
    </form>
    </main>
</template>
<script>
import {mapGetters, mapActions} from "vuex";
import Vue from "vue";
import Vuesession from 'vue-session';

Vue.use(Vuesession);

export default {
    name:"Register",
     beforeCreate(){
     if(this.$session.exists()){
            this.$router.push({name:"blog"})
     }else{
      this.$router.push({name:"register"})
     }
     this.changemessage('');
    },
    computed:mapGetters(['getemail','getname',"getpassword","getmessage"]),
    methods:{
        ...mapActions(['changeemail','changepassword','changename',"changemessage"]),
       async sendata(e){
            var date = new Date();
           e.preventDefault();
          return  await fetch('http://localhost:2222/register',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email:this.getemail,
             name:this.getname,
             password:this.getpassword,
             date:date.getMonth()+"/"+date.getDay()+"/"+date.getFullYear(),
            })
        }).then(res=>res.json())
          .then(data=>this.changemessage(data.success))
          .catch(e=>console.log(e));
    },
  beforeCreate(){
     if(this.$session.exist()){
            this.$router.push({name:"blog"})
     }else{
      this.$router.push({name:"login"})
     }
    }
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
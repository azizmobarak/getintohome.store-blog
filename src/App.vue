<template>
  <div id="app">
  <header>
   <div><img height="50" src="./assets/logo.png" /></div>
   <div>
   </div>
   <div id="div-list">
   <ul>
   <li><a href="/">home</a></li>
   <li><a href="/contact">contact</a></li>
   <li><a href="/login">Login</a></li>
   <li><button @click="logout">{{ this.getbtnname }}</button></li>
   </ul>
   </div>
   <div id="div-menu">
   <button @click="showmenu()" id="btnmenu"><i class="fas fa-align-justify"></i></button>
   </div>
   <div id="div-menu-list">
    <ul>
   <li><a href="/">home</a></li>
   <li><a href="/contact">contact</a></li>
   <li><a href="/login">Login</a></li>
   <li><button @click="logout">{{ this.getbtnname }}</button></li>
   </ul>
   </div>
   <br/>
  </header>
    <div id="showsomebtn">
    <div id="div-container">
    <h1 id="title">{{ getlocation }}</h1><br/>
    <a href="/Register"><button id="btncenter">Start</button></a>
    </div>
    </div>
   <br/><br/>
   <router-view></router-view>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';
import Vue from "vue";
import Vuesession from "vue-session";
Vue.use(Vuesession);

export default {
  name: 'App',
  computed:mapGetters(['getlocation','getbtnname',"getmessage"]),
  methods:{
  ... mapActions(['locationname',"changebtnname",'changemessage'])
    ,
    showmenu:()=>{
      var menu = document.getElementById('div-menu-list');
      if(menu.style.display==="none"){
        menu.style.display="block";
      }else{
        menu.style.display="none"
      }
    },
    logout(){
    if(this.getbtnname==="Logout!"){
       this.$session.destroy();
       window.location.reload();
     }else{
  this.$router.push({name:"register"})
     }
    }
  },
  created() {
   setTimeout(() => {
     this.locationname();
     this.changebtnname();
   }, 1000);
  }
}

</script>

<style scoped>
#showsomebtn{
  display: flex;
  flex-direction: column;
  flex-basis: content;
  text-align: center;
  align-items: center;
  margin: -100px -10px 180px;
  width:99vw;
  height: 100vh;
  background-image: url('./assets/back.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  z-index: -1;
}
#btncenter:hover{
  background-color: rgb(120, 120, 228);
}
#btncenter{
 margin-left: -10px;
 background-color:rgb(240, 157, 4);
 font-size: 4vh;
 width: 20vw;
 height: 40px;
}
#title{
  align-items: center;
  justify-content: center;
  color: aliceblue;
}
#div-container{
  margin-top: 50vh;
}
header{
  display: grid;
  grid-template-columns: auto auto auto ;
  width: 98vw;
  text-align: center;
}
header div{
  grid-template-columns: auto auto auto;
  column-gap: 1px white solid;
}
header ul {
  list-style: none;
  font-family: fantasy;
  font-size: 3vh;
  margin-left: 20vw;
}
ul li{
  float: left;
  padding: 5px;
}
li a {
   color: rgb(22, 121, 19);
   text-decoration: none;
}
li a:hover{
  color: rgb(113, 233, 113);
}
button{
  background-color: rgb(12, 73, 12);
  color:white;
  border-radius: 5%;
  width:15vw;
  border:0px white;
  height: 30px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-left: 10vw;
}
button:hover{
  background-color: rgb(20, 221, 20);
  cursor: pointer;
  transform: 1s;
  transition: 1s;
}
  #div-menu{
    display:none;
  }
   #div-menu-list{
    display: none;
    position: absolute;
    margin: 35px 30px 0;
  }
@media only screen and (max-width: 600px) {
  button{
    margin-left: 260px;
  }
  header{
    width:100vw
  }
  #showsomebtn{
    background-size: cover;
    width: 145vw;
  }
   #div-list{
    display: none;
  }
  #div-menu{
    display:block;
    margin-top: 10px;
  }

  #div-menu-list>ul li{
    float:left;
    padding: 5px;
  }
  #div-menu-list>ul{
     margin-left: 0px;
  }

}
</style>>

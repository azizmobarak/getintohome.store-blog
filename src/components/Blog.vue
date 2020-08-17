<template>
    <main>
     <div v-if="this.getlist.length<1">
    Please wait a few second to load
    </div>
    <div v-for="e in this.getlist" :key="e.name">
    <div class="div-name-picture">
    <img :src="e.image"/>
    <p>{{ e.name }}</p>
    </div>
    <a :href="e.url"><p>{{ e.title }}</p></a>
    </div>
    </main>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import Vue from "vue";
import Vuesession from 'vue-session';

Vue.use(Vuesession);

export default {
name:'Blog',
computed:mapGetters(['getlist']),
methods:{
    ...mapActions(['addtolist',"changemessage"]),
},
 beforeCreate(){
     if(!this.$session.exists()){
            this.$router.push({name:"home"})
     }
    },
created() {
     this.addtolist();
},
}
</script>
<style scoped>

main {
    margin: -100px 2vw 10px;
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 10px;
    row-gap: 10px;
}
main div{
    width: auto;
    background-color: rgb(238, 219, 184);
    border-radius: 2%;
    padding: 10px;
    transition:2s;
    grid-template-columns: auto auto auto;
}
.div-name-picture img{
    height: 50px;
    width: 50px;
    border:1px solid;
    border-radius: 80%;
}
.div-name-picture{
    display: flex;
    column-gap: 10px;
}
.div-name-picture p{
    color: green;
}
main div:hover{
    background-color: rgb(245, 202, 121);
}

@media only screen and (max-width:600px){
    main div{
       grid-template-columns: min-content;
    }
}
</style>
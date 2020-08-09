<template>
    <main>
    <div v-for="e in this.getlist" :key="e.name">
    <div class="div-name-picture">
    <img :src="e.picture"/>
    <p>{{ e.name }}</p>
    </div>
    <p>text : {{ e.text }}</p>
    </div>
    </main>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
export default {
name:'Blog',
computed:mapGetters(['getlist']) ,
methods:{
    ...mapActions(['addtolist'])
},
created(){
    this.addtolist();
}
,
data(){
    return{
    }
}
}
</script>
<style scoped>
main{
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
</style>
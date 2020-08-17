<template>
    <div>
    <button @click="send">Cliiiiiiiiiick me</button>
    </div>
</template>

<script>
export default {
    name:"test",
    methods:{
        send:()=>{
    fetch('http://localhost:2222/test',{
        method:"post",
       credentials:"include"
    }).then(res=>res.json)
    .then(data=>console.log(data));
        }
    }
}
</script>
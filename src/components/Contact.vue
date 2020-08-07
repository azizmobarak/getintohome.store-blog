<template>
    <div class="container">
    <form>
    <div>
    <input placeholder="Email" type="email" />
    </div>
    <div>
    <input placeholder="Subject" type="text" />
    </div>
    <div>
    <textarea rows="8" cols="50" placeholder="Message.."></textarea>
    </div>
    <div>
    <input id="submit" type="submit" value="Send"/>
    </div>
    </form>
    </div>
</template>

<script>
export default {
    name:'Contact'
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width:99vw;
    margin-top: -200px;
    height: 50vh;
}
form{
display: grid;
row-gap: 4vh;
width: 50vw;
}
input{
width: 100%;
height: 30px;
border-radius: 1%;
border:0.1px skyblue solid;
font-size: 13px;
}
textarea{
    width:100%;
    font-size: 13px;
}
#submit{
    width:50%;
    height: 30px;
    color:white;
    font-size: 2vw;
    background-color:orange;
    border:0px white;
    cursor: pointer;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#submit:hover{
    background-color: rgb(226, 149, 7);
}
</style>
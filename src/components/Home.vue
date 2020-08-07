<template>
<main>
<div>
<h1>Let's hear?</h1>
<p>our goal is to write something about our story and yours , let us know what happen , write something for whole world. </p>
</div>
<div id="row1">
<div class="text-row"><p>Don't need to take something for us really!</p></div>
<div id="card1" class="card-row"></div>
</div>
<div id="row2">
<div id="card2" class="card-row"></div>
<div class="text-row"><p>Get in touch with our experience and blog </p></div>
</div>
<div class="row3" id="row3">
<div><i class="fas fa-desktop"></i><p>whatch the world</p></div>
<div><i class="fab fa-angellist"></i><p>be with us</p></div>
<div><i class="fab fa-canadian-maple-leaf"></i><p>it's for pace and green</p></div>
</div>
<br/>
<div class="row4">
<p>Just a moment! , have you seen like this before?</p>
<button>Start</button>
</div>
</main>
</template>

<script>

export default {
    name:'Home'
}
</script>

<style scoped>
.row4{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: white;
    height: 30vh;
    background-image: url('../assets/img3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
     margin-bottom: 20px;
}
.row4 button{
    background-color: orange;
    border-radius: 5%;
    border:0px white;
    width:10vw;
    color: white;
    font-size: 2vw;
    margin:10px 0 20px;
    cursor: pointer;
}
.row4 button:hover{
    background-color: rgb(250, 179, 46);
    color: black;
}
.row4 p{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2vw;
}
#card1{
    background-image: url('../assets/svg1.svg');
    background-size:contain;
     background-repeat: no-repeat;
}
#card2{
    background-image: url('../assets/svg2.svg');
    background-size:contain;
    background-repeat: no-repeat;
}
.row3{
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-between;
}
.row3 div{
display: flex;
flex-direction: column;
width: 20%;
height: 150px;
border-radius: 80%;
text-align: center;
justify-content: center;
align-items: center;
color: aliceblue;
font-size: 6vh;
background-color:rgb(240, 157, 4);
}
.row3 p{
    font-size: 3vh;
}

.card-row{
    height: 300px;
   border-radius: 80%;
     box-shadow: 0 1px 0 0;
}
.text-row>p{
   margin: 10% 30% 0 ;
   font-family: Georgia, 'Times New Roman', Times, serif;
   font-size: 3vw;
}
#row1,#row2,#row3{
    display: flex;
    flex-direction: row;
    margin: 3% 0 0px;
}
main{
margin-top: 360px;
display: flex;
flex-direction: column;;
justify-content: center;
height: 40px;
}
main div{
width:100%;
text-align: center;
}

@media only screen and (max-width: 800px) {
    .text-row>p{
        margin-top: 40%;
        font-size: 4vw;}
       .row3 div{
           height: 100px;
           font-size: 5vw;
       }
       .row3 p{
           font-size: 2vw;
           width: 80%;
       }
}
</style>
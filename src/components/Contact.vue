<template>
    <div class="container">
    <form>
    <div>
    <input @input="email" placeholder="Email" type="email" />
    </div>
    <div>
    <input @input="subject" placeholder="Subject" type="text" />
    </div>
    <div>
    <textarea @input="message" rows="8" cols="50" placeholder="Message.."></textarea>
    </div>
    <div>
    <input id="submit" type="submit" value="Send"/>
    </div>
    </form>
    <br/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name:'Contact',
    computed:mapGetters(['getemail','getsubject','getmessage']),
    methods:{
        ...mapActions(['changeemail','changesubject','changemessage']),
        email(e){
       this.changeemail(e.target.value)
        },
        subject(e){
       this.changesubject(e.target.value);
        },
        message(e){
        this.changemessage(e.target.value);
        }
      ,
      sendtomail(){
          
      }
    }
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
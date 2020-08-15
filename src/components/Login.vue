<template>
    <main>
    <form>
    <div>
    <input @input="changeemail" placeholder="Email" type="email" />
    </div>
    <div>
    <input @input="changepassword" placeholder="Password" type="password" />
    </div>
    <div>
    <input @click="senddata" id="btnlogin" value="Login" type="submit" />
    </div>
    <p>You don't have an account yet? <a href="/register">create one</a></p>
    <p>forgot password ? <a href="#">recover it now</a></p>
    </form>
    </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:"Login",
    computed:mapGetters(['getemail','getpassword']),
    methods:{
        ...mapActions(['changeemail','changepassword']),
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
          .then(data=>console.log(data))
          .catch(e=>console.log(e));
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
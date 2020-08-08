<template>
    <main>
    <form>
    <div>
    <input placeholder="Email" type="email" />
    </div>
    <div>
    <input placeholder="Full name" type="text" />
    </div>
    <div>
    <input placeholder="Password" type="password" />
    </div>
    <div>
    <input placeholder="Confirm password" type="password" />
    </div>
    <div>
    <input id="btnlogin" value="Create Account" type="submit" />
    </div>
    <p>You have an account? <a href="/login">Login</a></p>
    </form>
    </main>
</template>
<script>
export default {
    name:"Register"
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
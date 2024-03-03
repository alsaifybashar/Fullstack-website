<template>

    <div class="navigation-bar">
        <nav>
            <h2 class="first-logo">En<span id="second">Math</span></h2>
            <ul>
                <li><router-link class="navbar-btn" to="/">Start</router-link></li>
                <li><router-link class="navbar-btn" to="/eKurser">eKurser</router-link></li>
            </ul>
            <router-link class="profile-btn" to="/profile">Profil</router-link>
        </nav>
    </div>

</template>


<script>
    export default{
        name: 'navigation-bar',
    }

</script>

<style>
* {
    margin: 0;
}


nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    padding-left: 10%;
    padding-right: 10%;
}
.first-logo{
    color: black;
    font-size: 28px;
}

span{
    color: #FF6900;
}

nav ul li{
    font-size: 20px;
    list-style-type: none;
    display: inline-block;
    padding: 10px 20px;

}

nav ul li a{
    color: black;
    text-decoration: none;
    font-weight: bold;
    border-radius: 100px;
}

nav ul li:hover{
background-color: gainsboro;
border-radius: 100px;
}

nav ul li .router-link:hover{
    color:#FF6900;
    transition: .3s;
}

.profile-btn{
    border:none;
    background: #FF6900;
    padding: 12px 30px;
    border-radius: 30px;
    color: black;
    font-weight: bold;
    font-size: 15px;
    transition: .4s;
    text-decoration: none;
}

.profile-btn:hover{
    transform: scale(1.05);
    cursor:pointer;
}

</style>

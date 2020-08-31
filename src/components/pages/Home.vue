<template>
    <div id="home">
        <div class="login">
            <div class="login-title">
                <h2>登录页面</h2>
            </div>
            <div class="login-username">
                <input v-model="username"
                placeholder="请输入用户名">
            </div>
            <div class="login-password">
                <input v-model="password"
                type="password"
                placeholder="请输入密码">
            </div>
            <div class="login-button">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
import CONF from '@/assets/CONF.js'
import axios from 'axios'

export default {
    name : "Home",
    data() {
        return {
            username: "",
            password: '',
        }
    },
    methods: {
        login() {
            let username = this.username;
            let password = this.password;
            axios.post(`http://${CONF.host}/login`, {username, password})
            .then( res => {
                let data = res.data;
                if(data.status) {
                    this.$router.push({path: "/score", query: {username}});
                } else {
                    alert(data.msg);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
    #home {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: gray;
    }

    .login {
        width: 100%;
        height: 300px;
        position: absolute;
        display: block;
        text-align: center;
        top: 30%;
    }
    .login-title {
        color: white;
    }
    .login-username input {
        height: 35px;
        width: 300px;
        border: 1px solid green;
        border-radius: 5px;
        padding: 0 5px 0 5px;
    }
    .login-password {
        margin-top: 20px;
    }
    .login-password input {
        height: 35px;
        width: 300px;
        border: 1px solid green;
        border-radius: 5px;
        padding: 0 5px 0 5px;
    }
    .login-button {
        margin-top: 20px;
    }
    .login-button button {
        height: 35px;
        width: 100px;
        background: green;
        border: 1px solid green;
        border-radius: 5px;
        font-size: 18px;
        color: white;
    }
</style>
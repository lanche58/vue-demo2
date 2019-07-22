<template>
    <div class="top-area">
        <header class="header">
            <div class="container clearfix">
                <div class="logo fl">
                    <router-link to="/"><img src="@/assets/img/logo.png" alt=""></router-link>
                </div>
                <div class="fr">
                    <p class="name" v-if="loggedin">{{userName}}</p>
                    <button type="button" @click="isLoginShow = true" v-if="!loggedin" class="btn-login">登录</button>
                    <button type="button" class="btn-logout" v-if="loggedin" @click="logoutHandle">退出</button>
                    <div class="btn-shopping-cart">
                        <router-link to="/cart"><i class="icon iconfont icon-gaiicon-"></i><span class="num">10</span></router-link>
                    </div>
                </div>
            </div>
        </header>
        <model-popup class="login-popup" @close="isLoginShow = false" v-if="isLoginShow">
            <p class="title">登录</p>
            <form>
                <div class="input-wrap"><i class="icon iconfont icon-yonghu"></i><input type="text" class="inp" v-model="userName"/></div>
                <div class="input-wrap"><i class="icon iconfont icon-buoumaotubiao32"></i><input type="password" class="inp" v-model="userPwd"/></div>
                <div class="submit-wrap"><button type="button" @click="loginHandle" class="btn-submit">登 录</button></div>
            </form>
            <p class="error-tips" v-if="errorTips">{{errorTips}}</p>
        </model-popup>
    </div>
</template>

<script>
// import UserLogin from '../login/Login';
import axios from 'axios';
import ModelPopup from '@/components/modelPopup/model';
export default {
    data() {
        return {
            isLoginShow: false,
            userName: 'admin',
            userPwd: '123456',
            errorTips: '',
            loggedin: false
        }
    },
    components: {
        // UserLogin,
        ModelPopup
    },
    mounted() {
        axios.get('/users/checkLogin')
        .then(res => {
            const data = res.data;
            if (!data.status) {
                this.userName = data.result.userName;
                this.loggedin = true;
            }
        })
    },
    methods: {
        loginHandle() {
            const params = {
                userName: this.userName,
                userPwd: this.userPwd
            }
            axios.post('/users/login', params)
            .then(res => {
                const data = res.data;
                if (!data.status) {
                    this.isLoginShow = false;
                    this.loggedin = true;
                    return;
                }
                this.errorTips = data.msg;
            })
        },
        logoutHandle() {
            axios.post('/users/logout')
            .then(res => {
                const data = res.data;
                if (!data.status) {
                    this.loggedin = false;
                }
            })
        }
    }
}
</script>

<style lang="scss">
@import './style.scss';
</style>
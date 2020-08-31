<template>
    <div class="score">
        <div class="title">
            本图库共300张图像  第 {{ currentIdx+1 }} / 300 张
        </div>
        <div class="main">
            <div class="main-image">
                <img :src="currentImg" alt="打分图像">
            </div>
            <div class="main-button">
                <button @click="set_score1">1: 几乎什么都看不见</button>
                <button @click="set_score2">2: 隐约能看清楚表的轮廓</button>
                <button @click="set_score3">3: 表的轮廓和指针均能看清,部分表盘整数刻度隐约能看见但不清晰</button>
                <button @click="set_score4">4: 表的整数刻度均能看清,但部分小刻度无法看清</button>
                <button @click="set_score5">5: 基本能进行读数,但占屏比较小的需要仔细读</button>
                <button @click="set_score6">6: 能感觉到有雾,但已经清晰到几乎不影响读数</button>
                <button @click="set_score7">7: 几乎没有雾</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CONF from '@/assets/CONF.js';
export default {
    name: "Score",
    data() {
        return {
            username: "",
            currentIdx: 0,
            currentImg: ""
        }
    },
    mounted() {
        this.username = this.$route.query.username;
        axios.get(`http://${CONF.host}/score`)
        .then(res => {
            let data = res.data;
            if(data.status){
                this.currentImg = data.image;
            } else {
                alert("图片没找到！");
            }
        })
        .catch(err => {
            console.log(err);
        })
    },
    methods: {
        set_score1() {
            axios.post(`http://${CONF.host}/score`, {username: this.username, score: 1, index: this.currentIdx+1})
            .then(res => {
                let data = res.data;
                if(data.status){
                    this.currentImg = data.image;
                    this.currentIdx++;
                } else {
                    alert(data.msg);
                    this.$router.push("/succeed");
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        set_score2() {
            axios.post(`http://${CONF.host}/score`, {username: this.username, score: 2, index: this.currentIdx+1})
            .then(res => {
                let data = res.data;
                if(data.status){
                    this.currentImg = data.image;
                    this.currentIdx++;
                } else {
                    alert(data.msg);
                    this.$router.push("/succeed");
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        set_score3() {
            axios.post(`http://${CONF.host}/score`, {username: this.username, score: 3, index: this.currentIdx+1})
            .then(res => {
                let data = res.data;
                if(data.status){
                    this.currentImg = data.image;
                    this.currentIdx++;
                } else {
                    alert(data.msg);
                    this.$router.push("/succeed");
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        set_score4() {
            axios.post(`http://${CONF.host}/score`, {username: this.username, score: 4, index: this.currentIdx+1})
            .then(res => {
                let data = res.data;
                if(data.status){
                    this.currentImg = data.image;
                    this.currentIdx++;
                } else {
                    alert(data.msg);
                    this.$router.push("/succeed");
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        set_score5() {
            axios.post(`http://${CONF.host}/score`, {username: this.username, score: 5, index: this.currentIdx+1})
            .then(res => {
                let data = res.data;
                if(data.status){
                    this.currentImg = data.image;
                    this.currentIdx++;
                } else {
                    alert(data.msg);
                    this.$router.push("/succeed");
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        set_score6() {
            axios.post(`http://${CONF.host}/score`, {username: this.username, score: 6, index: this.currentIdx+1})
            .then(res => {
                let data = res.data;
                if(data.status){
                    this.currentImg = data.image;
                    this.currentIdx++;
                } else {
                    alert(data.msg);
                    this.$router.push("/succeed");
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        set_score7() {
            axios.post(`http://${CONF.host}/score`, {username: this.username, score: 7, index: this.currentIdx+1})
            .then(res => {
                let data = res.data;
                if(data.status){
                    this.currentImg = data.image;
                    this.currentIdx++;
                } else {
                    alert(data.msg);
                    this.$router.push("/succeed");
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
    .score {
        margin: 0;
        padding: 0;
        height: 100%;
    }
    .title {
        margin: 0;
        height: 5%;
        text-align: center;
        color: gray;
        padding-top: 15px;
        font-size: 18px;
    }

    .main {
        height: 90%;
        margin: 0;
        padding: 0;
    }

    .main-image {
        width: 80%;
        float: left;
    }
    .main-image img {
        max-width: 100%;
        max-height: 100%;
    }
    .main-button {
        width: 20%;
        float: left;
        height: 100%;
    }
    .main-button button {
        width: 100%;
        height: 14%;
        margin: 0;
        border: 1px solid white;
        background: green;
        color: white;
        font-size: 15px;
    }
</style>
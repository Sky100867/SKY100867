<template>
  <div class="">
    <div style="background-color: #98eed3; height: 100vh">
      <div style="height: 200px"></div>
      <div class="sky_box">
        <img
          src="../assets/logo.png"
          alt=""
          style="
            width: 50px;
            height: 50px;
            border: 5px solid #c8caca;
            border-radius: 50%;
          "
        />
        <p>用户名: <input type="text" v-model="name"/></p>
        <p>密　码: <input type="text" v-model="apk"/></p>
        <button
          style="
            width: 70px;
            height: 20px;
            border: none;
            color: white;
            background-color: #4099f8;
          "
          @click="add"
        >
          登录
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
const name = ref([])
const apk = ref([])
const add = ()=>{
    if(name.value==""||apk.value==""){
        alert("不能为空")
        return
    }
    localStorage.setItem("name",name.value)
    router.push("home")
}
</script>

<style lang='scss'>
.sky_box {
  width: 400px;
  height: 200px;
  background-color: white;
  margin: 0 auto;
  text-align: center;
}
p {
  margin: 10px;
}
</style>

<template>
  <div class="">
    <div class="sky_aa">
      <div>
        <div
          style="
            display: flex;
            justify-content: space-around;
            text-align: center;
          "
        >
          <div style="width: 800px;"></div>
          <div style="margin-top: 20px;"></div>
          <span>
            <p style="color: white; width: 100px;text-align: center;line-height: 60px;" @click="flag = !flag">
              {{ name }}
            </p>
              <ul v-show="!flag" class="sky_eee">
                <li
                  v-for="(item, index) in roles"
                  :key="index"
                  @click="tiao(item.type)"
                  style="border: 1px solid  rgb(132, 132, 132); text-align: center;height: 50px; line-height: 50px;"
                >
                  <p>
                    {{ item.name }}
                  </p>
                </li>
                <li style="border: 1px solid  rgb(132, 132, 132); text-align: center;height: 50px;  line-height: 50px;" @click="tui">退出登录</li>
              </ul>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { getroles } from "../http/api";
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({
  type: -1,
});
const name = localStorage.getItem("name");
const roles = ref([]);
const flag = ref([]);
getroles().then((res) => {
  console.log(res);
  roles.value = res.data;
});

const tiao = (type) => {
  data.type = type;
  store.commit("add", type);
};
const tui = ()=>{
    localStorage.removeItem("name")
    router.push("/")
}
</script>

<style lang='scss'>
.sky_aa {
  width: 100%;
  height: 60px;
  background-color: #545454;
}
.sky_eee{
    width: 100px;
}
</style>

<template>
  <div class="">
    <div class="sky_kuan">
      <ul>
        <li v-for="(item, index) in lists" :key="index">
          <span @click="show=!show">
            {{ item.title }}
            <span class="sky_gt" >&gt;</span>
          </span>
          <div v-if="item.children">
              <ul v-show="show">
                <li v-for="(ele, ind) in item.children" :key="ind" class="sky_ss">
                    <p v-if="ele.type.includes($store.state.type)">{{ ele.title }}</p>
                    
                </li>
              </ul>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { getmenu } from "../http/api";
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
const lists = ref([]);
getmenu().then((res) => {
  console.log(res);
  lists.value = res.data;
});
const show = ref(false);
</script>

<style lang='scss'>
.sky_kuan {
  width: 200px;
  height: 100vh;
  background-color: #545454;
  color: white;
}
.sky_ss{
    padding: 15px;
    margin-left: 30px;
}
.sky_gt{
    margin-left: 90px;
}
</style>

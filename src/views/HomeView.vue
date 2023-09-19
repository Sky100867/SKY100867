<template>
  <div class="">
    <div>
      <myNav></myNav>
      <div>
        <myMent></myMent>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import myMent from "../components/myMent.vue";
import myNav from "../components/myNav.vue";
const store = useStore();
const router = useRouter();
const route = useRoute();
const data = reactive({});
</script>

<style lang='scss'>
</style>

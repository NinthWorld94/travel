<template>
  <div class="wrapper">
    <carousel
      :autoplay="true"
      :duration="3000"
      :initial="0"
      :hasDot="true"
      :hasDirector="true"
    >
      <car-item v-for="(item, index) of carData" :key="index">
        <img class="swiper-img" :src="item.imgUrl" />
      </car-item>
    </carousel>
  </div>
</template>

<script>
import { computed } from "vue";
import carData from "@/assets/carousel";
export default {
  name: "HomeSwiper",
  props: {
    list: Array,
  },
  setup(props) {
    const swiperOption = {
      pagination: ".swiper-pagination",
      loop: true,
    };
    const showSwiper = computed(() => props.list.length);
    return { swiperOption, showSwiper, carData };
  },
};
</script>

<style lang="stylus" scoped>
.wrapper {
  width: 100%;
  height: 31.25vw;
  background: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>

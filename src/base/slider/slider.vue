<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in recommends" :key="item.index">
      <a :href="item.linkUrl">
        <img  :src="item.picUrl" width="100%">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>


<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
/* import BScroll from "better-scroll";
import { addClass } from "../../common/js/dom.js"; */
export default {
  name: "slider",
  props: {
    recommends: {
      type: Array,
    },
  },
  components: {
    swiper,
    swiperSlide,
  
  },
  data() {
    return {
      swiperOption: {
        loop:true,
        autoplay: {
          delay: 2000
        },
        speed: 500,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  mounted() {
  
  },
  methods: {
    
  }
};
</script>

<style scoped lang="stylus">
@import '~@/common/stylus/variable';

.slider {
  min-height: 1px;

  .slider-group {
    position: relative;

    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;

      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;

    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-text-l;

      &.active {
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }
}
</style>


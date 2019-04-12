<template>
  <div></div>
</template>


<script>
import { getSingerList } from "../../api/singer.js";
import { ERR_OK } from "../../api/config.js";

export default {
  data() {
    return {
      singers: []
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code == ERR_OK) {
          this.singers = res.data.list;
          console.info(this.singers);
        }
      });
    }
  }
};
</script>


<style lang="stylus" scoped>
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>

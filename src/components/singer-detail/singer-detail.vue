<template>
  <transition appear name="slide">
     <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>


<script>
import MusicList from "../music-list/music-list";
import { getSingerDetail } from "../../api/singer.js";
import {
  createSong,
  isValidMusic,
  processSongsUrl
} from "../../common/js/song";
import { ERR_OK } from "../../api/config.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      songs: []
    };
  },
  components: {
    MusicList
  },
  computed: {
    title() {
      return this.singer.name;
    },
    bgImage() {
      return this.singer.avatar;
    },
    ...mapGetters(["singer"])
  },
  created() {
    this._getDetail();
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push("/singer");
        return;
      }
      getSingerDetail(this.singer.id).then(res => {
        if (res.code == ERR_OK) {
          processSongsUrl(this._normalizeSongs(res.data.list)).then(songs => {
            this.songs = songs;
          });
        }
      });
    },
    _normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        let { musicData } = item; /* 大括号中的key对应item的key es6语法 */

        if (isValidMusic(musicData)) {
          /* 过滤付费歌曲 */
          ret.push(
            createSong(musicData)
          ); /*得到类似的数据结构 [{id, mid, singer, name, album, duration,image, url},{},{}.....] */
        }
      });
      return ret;
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '~@/common/stylus/variable';

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>


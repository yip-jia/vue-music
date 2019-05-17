<template>
    <transition name="slide">
        <music-list :rank="rank" :bg-image="bgImage"   :title="title" :songs='songs'></music-list>
    </transition>
</template>


<script>
import MusicList from "../../components/music-list/music-list"
import {mapGetters} from 'vuex'
import {getMusicList} from  '../../api/rank.js'
import {ERR_OK} from '../../api/config.js'
import {createSong, isValidMusic, processSongsUrl} from  '../../common/js/song.js'

export default {
    data() {
       return {
           songs: [],
           rank: true
       }
    },
    computed: {
        title() {
            return  this.topList.topTitle
        },
        bgImage() {
            return  this.topList.picUrl
        },

      ...mapGetters([
          'topList'
      ])
    },
    created() {
      this._getMusicList()
    },
    components:{
        MusicList
    },
    methods: {
       _getMusicList() {
           getMusicList(this.topList.id).then((res) => {
               if(res.code === ERR_OK) {
                  processSongsUrl(this._normalizeSongs(res.songlist)).then((songs) => {
                  this.songs = songs
                  })
               }
           }) 
       },
       _normalizeSongs(list) {
          
           let ret = []  
           list.forEach((item) => {
               const musicData = item.data
               if (isValidMusic(musicData)) {
                   
                ret.push(createSong(musicData))
             }
              
           })     
            return ret
       }
    }
}
</script>



<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
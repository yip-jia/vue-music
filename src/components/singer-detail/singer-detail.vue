<template>
<transition appear name="slide">
   <div class="s"></div>
</transition>
</template>


<script>
export default {};
</script>


<style lang="stylus" scoped>
.s{
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background #fff
    z-index:100
}
 @import "~@/common/stylus/variable"
.slide-enter-active, .slide-leave-active 
  transition: all 0.3s;


.slide-enter, .slide-leave-to 
  transform: translate3d(100%, 0, 0);

</style>


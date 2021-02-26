<template>
  <div class="treeMenu"
        :style="'background-color:'+bgColor+';'">
      <slot>
      </slot>
  </div>
</template>

<script>
export default {
    name:"TreeMenu",
    props:{
        bgColor:{
            type:String,
            default:"#000"
        }
    }
}
</script>

<style lang="stylus" scoped>
.treeMenu
    width 100%
    color #fff
</style>
<!--
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-19 13:42:54
 * @LastEditors: 舌红
 * @LastEditTime: 2024-08-21 16:08:36
-->
<template>
  <div
    class="confirm-mask update-confirm-loader"
    :style="{ 'zIndex': zIndex }"
  >
    <slot />
  </div>
</template>

<script>

export default {
  props: {
    zIndex: {
      type: Number,
      default: 2001
    }
  }
}

</script>

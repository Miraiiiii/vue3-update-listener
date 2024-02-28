<!--
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-10 17:01:44
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-23 14:44:12
-->
<template>
  <ConfirmMask>
    <div class="confirm-element__wrapper">
      <div class="confirm-element__header">
        <div class="confirm-element__title">
          提示
        </div>
        <div
          class="confirm-element__close"
          @click="cancel"
        >
          &times;
        </div>
      </div>
      <div class="confirm-element__content">
        <div class="confirm-element__desc">
          {{ content }}
        </div>
      </div>
      <div class="confirm-element__btns">
        <div
          class="confirm-element__btn confirm-element__btn--default"
          @click="cancel"
        >
          取消
        </div>
        <div
          class="confirm-element__btn confirm-element__btn--primary"
          @click="confirm"
        >
          确定
        </div>
      </div>
    </div>
  </ConfirmMask>
</template>

<script>
import DefaultMixins from '../../mixins/default'

export default {
  name: 'UpdateConfirmElement',
  mixins: [DefaultMixins]
}
</script>
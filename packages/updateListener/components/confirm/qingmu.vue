<!--
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-19 11:59:50
 * @LastEditors: 舌红
 * @LastEditTime: 2024-08-21 16:07:12
-->
<template>
  <ConfirmMask :z-index="zIndex">
    <div class="confirm-qingmu__body">
      <div class="confirm-qingmu__wrapper">
        <div class="confirm-qingmu__title">
          新版上线啦！
        </div>
        <div class="confirm-qingmu__content">
          <div class="confirm-qingmu__desc">
            {{ content }}
          </div>
        </div>
        <div class="confirm-qingmu__footer">
          <div
            class="confirm-qingmu__btn confirm-qingmu__btn--confirm"
            @click="confirm"
          >
            立即更新
          </div>
          <div
            class="confirm-qingmu__btn confirm-qingmu__btn--cancel"
            @click="cancel"
          >
            <span>暂不更新</span>
          </div>
        </div>
      </div>
    </div>
  </ConfirmMask>
</template>

<script>
import DefaultMixins from '../../mixins/default'

export default {
  name: 'UpdateConfirmQingmu',
  mixins: [DefaultMixins]
}

</script>
/*
 * @Description:
 * @Author: 舌红
 * @Date: 2024-01-10 11:59:14
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-20 09:58:41
 */
import { modalPromise } from '../../utils/modalPromise'
import ConfirmDialog from './index.vue'

export async function openConfirm(config, mountedEl) {
  return modalPromise(ConfirmDialog, config, mountedEl)()
}

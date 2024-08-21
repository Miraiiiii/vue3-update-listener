/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-27 18:26:15
 * @LastEditors: 舌红
 * @LastEditTime: 2024-08-21 16:06:15
 */

/**
 * modal调用promise化
 * @param {Object} comp Vue组件配置对象
 * @param {Object} defaultConfig 默认配置对象
 * @param {Element} mountedEl 挂载对象
 * @returns {Promise} Promise对象
 */

// import Vue from 'vue'
import { createVNode, render } from 'vue'

function getMaxZIndex() {
  let maxZ = 0
  const elements = document.getElementsByTagName('*')
  for (let i = 0; i < elements.length; i++) {
    const zIndex = window.getComputedStyle(elements[i]).zIndex
    if (!isNaN(zIndex)) {
      maxZ = Math.max(maxZ, parseInt(zIndex, 10))
    }
  }
  return maxZ || 2001
}

export function modalPromise(comp, defaultConfig, mountedEl) {
  return (config, removable = true) => {
    return new Promise((resolve, reject) => {
      const props = Object.assign({}, defaultConfig, config)
      const maxZ = getMaxZIndex()
      const vm = createVNode(comp, {
        ...props,
        zIndex: maxZ,
        onCancel: onCancel(reject),
        onConfirm: onConfirm(resolve, removable)
      }, null)

      if (!mountedEl) {
        mountedEl = document.body
      }
      render(vm, mountedEl)
      
      const parentNode = document.querySelector('.confirm-mask.update-confirm-loader')
      
      function onCancel() {
        return function (data) {
          parentNode && parentNode.remove()
          reject(data)
        }
      }
      
      function onConfirm() {
        return function (data) {
          if (removable) {
            parentNode && parentNode.remove()
          }
          resolve(data, this)
        }
      }
    })
  }
}

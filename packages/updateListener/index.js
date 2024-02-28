/*
 * @Description:
 * @Author: 舌红
 * @Date: 2024-01-09 17:38:09
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-28 16:31:46
 */

import { openConfirm } from './components/confirm/confirm'

/**
 * 监听版本更新
 * @param {Object} Vue Vue对象
 * @param {Object} options 配置对象
 * @param {String} options.versionUrl 请求版本信息根目录路径，默认为'/dist'
 * @param {Number} options.interval 检查更新间隔时间，默认为5分钟，单位为毫秒
 * @param {Boolean} options.isTip 是否提示更新，默认为true
 * @param {Boolean} options.isListenJSError 是否监听JS报错，默认为false
 * @param {Object} options.modalProps 弹窗配置
 * @param {String} options.modalProps.content 弹窗内容
 * @param {Element} options.modalProps.mountedEl 弹窗挂载节点，默认为body
 * @param {String} options.type 弹窗样式类型，默认为'qingmu', 可选值为'element'、'qingmu'、'custom'(暂不支持)
 * @param {Boolean} options.showTest 弹窗常显测试
 * @returns {Void} 无返回值
 */

const ListenVersion = {
  install(Vue, options) {
    let currebtVersion
    let setInterValId
    let isUpdate = false
    let isStop = false

    // 获取版本信息
    const getVersion = async () => {
      return fetch(`${options.versionUrl || '/dist'}/version.json?timeStamp=` + Date.now()).then(res => {
        return res.json()
      }).catch(err => {
        console.warn('获取version.json文件失败，请检查路径是否正确')
        isStop = true
      })
    }

    // 检查是否有新版本
    const checkUpdate = async () => {
      const commitHash = (await getVersion()).commitHash
      return commitHash !== currebtVersion
    }

    // 停止检查更新
    const stopUpdate = () => {
      if (setInterValId) {
        console.log('停止检查更新')
        clearInterval(setInterValId)
        setInterValId = ''
      }
    }

    // 开始检查更新
    const startListen = async () => {
      if (!options.showTest && (options.isTip === false || process.env.NODE_ENV === 'development' || isStop)) return
      const versionInfo = await getVersion()
      if (!versionInfo || isUpdate) return
      currebtVersion = versionInfo.commitHash
      console.log('开始检查更新')
      setInterValId = setInterval(async () => {
        isUpdate = options.showTest || (await checkUpdate())
        // 判断versionInfo.message是否有--no-tip字符，如果有则不提示更新
        if ((isUpdate && versionInfo.isTip) || options.showTest) {
          console.log('有新版本')
          stopUpdate()
          await callConfirm()
        }
      }, options.interval || 5 * 60 * 1000)
    }

    const callConfirm = async () => {
      try {
        const hasContent = options.modalProps && options.modalProps.content
        await openConfirm({
          content: hasContent ? options.modalProps.content : '为了更好的版本体验请更新到最新版本',
          type: options.type || 'qingmu',
        }, options.modalProps && options.modalProps.mountedEl)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }

    const listenPageVisible = () => {
      if (document.hidden) {
        stopUpdate()
      } else {
        startListen()
      }
    }

    document.addEventListener('visibilitychange', listenPageVisible)

    const listenJSError = async (event) => {
      if (event.target.nodeName === 'SCRIPT') {
        stopUpdate()
        await callConfirm()
      }
    }  

    if (options.isListenJSError) {
      window.addEventListener('error', listenJSError)
    }

    startListen()
  }
}

export default ListenVersion

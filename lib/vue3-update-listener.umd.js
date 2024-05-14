(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vue3-update-listener", [], factory);
	else if(typeof exports === 'object')
		exports["vue3-update-listener"] = factory(require("vue"));
	else
		root["vue3-update-listener"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__274__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 907:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 274:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__274__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
;// CONCATENATED MODULE: ./packages/updateListener/utils/modalPromise.js
/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-27 18:26:15
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-27 18:53:45
 */

/**
 * modal调用promise化
 * @param {Object} comp Vue组件配置对象
 * @param {Object} defaultConfig 默认配置对象
 * @param {Element} mountedEl 挂载对象
 * @returns {Promise} Promise对象
 */

// import Vue from 'vue'

function modalPromise(comp, defaultConfig, mountedEl) {
  return (config, removable = true) => {
    return new Promise((resolve, reject) => {
      const props = Object.assign({}, defaultConfig, config);
      const vm = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(comp, {
        ...props,
        onCancel: onCancel(reject),
        onConfirm: onConfirm(resolve, removable)
      }, null);
      if (!mountedEl) {
        mountedEl = document.body;
      }
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.render)(vm, mountedEl);
      const parentNode = document.querySelector('.confirm-mask.update-confirm-loader');
      function onCancel() {
        return function (data) {
          parentNode && parentNode.remove();
          reject(data);
        };
      }
      function onConfirm() {
        return function (data) {
          if (removable) {
            parentNode && parentNode.remove();
          }
          resolve(data, this);
        };
      }
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/updateListener/components/confirm/index.vue?vue&type=template&id=34ebd655

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveDynamicComponent)($data.confirmTypeNames[_ctx.type]), {
    content: _ctx.content,
    onConfirm: _ctx.confirm,
    onCancel: _ctx.cancel
  }, null, 40, ["content", "onConfirm", "onCancel"]);
}
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/index.vue?vue&type=template&id=34ebd655

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/updateListener/components/confirm/qingmu.vue?vue&type=template&id=65a28e1d

const _hoisted_1 = {
  class: "confirm-qingmu__body"
};
const _hoisted_2 = {
  class: "confirm-qingmu__wrapper"
};
const _hoisted_3 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "confirm-qingmu__title"
}, " 新版上线啦！ ", -1);
const _hoisted_4 = {
  class: "confirm-qingmu__content"
};
const _hoisted_5 = {
  class: "confirm-qingmu__desc"
};
const _hoisted_6 = {
  class: "confirm-qingmu__footer"
};
const _hoisted_7 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", null, "暂不更新", -1);
const _hoisted_8 = [_hoisted_7];
function qingmuvue_type_template_id_65a28e1d_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ConfirmMask = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("ConfirmMask");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_ConfirmMask, null, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_4, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_5, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(_ctx.content), 1)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: "confirm-qingmu__btn confirm-qingmu__btn--confirm",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.confirm && _ctx.confirm(...args))
    }, " 立即更新 "), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: "confirm-qingmu__btn confirm-qingmu__btn--cancel",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.cancel && _ctx.cancel(...args))
    }, _hoisted_8)])])])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/qingmu.vue?vue&type=template&id=65a28e1d

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/updateListener/layout/mask.vue?vue&type=template&id=228608f1

const maskvue_type_template_id_228608f1_hoisted_1 = {
  class: "confirm-mask update-confirm-loader"
};
function maskvue_type_template_id_228608f1_render(_ctx, _cache) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", maskvue_type_template_id_228608f1_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")]);
}
;// CONCATENATED MODULE: ./packages/updateListener/layout/mask.vue?vue&type=template&id=228608f1

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(907);
;// CONCATENATED MODULE: ./packages/updateListener/layout/mask.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(script, [['render',maskvue_type_template_id_228608f1_render]])

/* harmony default export */ var mask = (__exports__);
;// CONCATENATED MODULE: ./packages/updateListener/mixins/default.js
/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-02-19 13:49:58
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-20 11:14:23
 */

/* harmony default export */ var mixins_default = ({
  components: {
    ConfirmMask: mask
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'qingmu'
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    confirm() {
      this.$emit('confirm');
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/updateListener/components/confirm/qingmu.vue?vue&type=script&lang=js

/* harmony default export */ var qingmuvue_type_script_lang_js = ({
  name: 'UpdateConfirmQingmu',
  mixins: [mixins_default]
});
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/qingmu.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/qingmu.vue




;
const qingmu_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(qingmuvue_type_script_lang_js, [['render',qingmuvue_type_template_id_65a28e1d_render]])

/* harmony default export */ var qingmu = (qingmu_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/updateListener/components/confirm/element.vue?vue&type=template&id=26c0f2be

const elementvue_type_template_id_26c0f2be_hoisted_1 = {
  class: "confirm-element__wrapper"
};
const elementvue_type_template_id_26c0f2be_hoisted_2 = {
  class: "confirm-element__header"
};
const elementvue_type_template_id_26c0f2be_hoisted_3 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
  class: "confirm-element__title"
}, " 提示 ", -1);
const elementvue_type_template_id_26c0f2be_hoisted_4 = {
  class: "confirm-element__content"
};
const elementvue_type_template_id_26c0f2be_hoisted_5 = {
  class: "confirm-element__desc"
};
const elementvue_type_template_id_26c0f2be_hoisted_6 = {
  class: "confirm-element__btns"
};
function elementvue_type_template_id_26c0f2be_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ConfirmMask = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("ConfirmMask");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_ConfirmMask, null, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", elementvue_type_template_id_26c0f2be_hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", elementvue_type_template_id_26c0f2be_hoisted_2, [elementvue_type_template_id_26c0f2be_hoisted_3, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: "confirm-element__close",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.cancel && _ctx.cancel(...args))
    }, " × ")]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", elementvue_type_template_id_26c0f2be_hoisted_4, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", elementvue_type_template_id_26c0f2be_hoisted_5, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(_ctx.content), 1)]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", elementvue_type_template_id_26c0f2be_hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: "confirm-element__btn confirm-element__btn--default",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.cancel && _ctx.cancel(...args))
    }, " 取消 "), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
      class: "confirm-element__btn confirm-element__btn--primary",
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.confirm && _ctx.confirm(...args))
    }, " 确定 ")])])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/element.vue?vue&type=template&id=26c0f2be

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/updateListener/components/confirm/element.vue?vue&type=script&lang=js

/* harmony default export */ var elementvue_type_script_lang_js = ({
  name: 'UpdateConfirmElement',
  mixins: [mixins_default]
});
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/element.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/element.vue




;
const element_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(elementvue_type_script_lang_js, [['render',elementvue_type_template_id_26c0f2be_render]])

/* harmony default export */ var confirm_element = (element_exports_);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/updateListener/components/confirm/index.vue?vue&type=script&lang=js



/* harmony default export */ var confirmvue_type_script_lang_js = ({
  name: 'UpdateConfirm',
  components: {
    UpdateConfirmQingmu: qingmu,
    UpdateConfirmElement: confirm_element
  },
  mixins: [mixins_default],
  data() {
    return {
      confirmTypeNames: {
        qingmu: 'UpdateConfirmQingmu',
        element: 'UpdateConfirmElement'
      }
    };
  }
});
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/index.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/index.vue




;
const confirm_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(confirmvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var components_confirm = (confirm_exports_);
;// CONCATENATED MODULE: ./packages/updateListener/components/confirm/confirm.js
/*
 * @Description:
 * @Author: 舌红
 * @Date: 2024-01-10 11:59:14
 * @LastEditors: 舌红
 * @LastEditTime: 2024-02-20 09:58:41
 */


async function openConfirm(config, mountedEl) {
  return modalPromise(components_confirm, config, mountedEl)();
}
;// CONCATENATED MODULE: ./packages/updateListener/index.js
/*
 * @Description:
 * @Author: 舌红
 * @Date: 2024-01-09 17:38:09
 * @LastEditors: 舌红
 * @LastEditTime: 2024-05-13 11:08:34
 */



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
 * @param {Boolean} options.refreshSameOrigin 是否刷新同源页面，默认为true
 * @returns {Void} 无返回值
 */

const ListenVersion = {
  install(Vue, options) {
    let currebtVersion;
    let setInterValId;
    let isUpdate = false;
    let isStop = false;
    if (options.refreshSameOrigin) {
      window.addEventListener('storage', function (event) {
        if (event.key === 'refreshPage' && event.newValue === 'true') {
          localStorage.removeItem('refreshPage');
          window.location.reload();
        }
      });
    }

    // 获取版本信息
    const getVersion = async () => {
      return fetch(`${options.versionUrl || '/dist'}/version.json?timeStamp=` + Date.now()).then(res => {
        return res.json();
      }).catch(err => {
        isStop = true;
      });
    };

    // 检查是否有新版本
    const checkUpdate = async () => {
      const commitHash = (await getVersion()).commitHash;
      return commitHash !== currebtVersion;
    };

    // 停止检查更新
    const stopUpdate = () => {
      if (setInterValId) {
        clearInterval(setInterValId);
        setInterValId = '';
      }
    };
    const handleListen = async versionInfo => {
      isUpdate = options.showTest || (await checkUpdate());
      // 判断versionInfo.message是否有--no-tip字符，如果有则不提示更新
      if (isUpdate && versionInfo.isTip || options.showTest) {
        stopUpdate();
        await callConfirm();
      }
    };

    // 开始检查更新
    const startListen = async (immediate = false) => {
      if (!options.showTest && (options.isTip === false || isStop)) return;
      const versionInfo = await getVersion();
      if (!versionInfo || isUpdate) return;
      if (!immediate) {
        currebtVersion = versionInfo.commitHash;
      }
      immediate && (await handleListen(versionInfo));
      setInterValId = setInterval(async () => await handleListen(versionInfo), options.interval || 5 * 60 * 1000);
    };
    const callConfirm = async () => {
      try {
        const modalElement = document.querySelector('.confirm-mask.update-confirm-loader');
        if (modalElement) return;
        const hasContent = options.modalProps && options.modalProps.content;
        await openConfirm({
          content: hasContent ? options.modalProps.content : '为了更好的版本体验请更新到最新版本',
          type: options.type || 'qingmu'
        }, options.modalProps && options.modalProps.mountedEl);
        if (options.refreshSameOrigin) {
          localStorage.setItem('refreshPage', 'true');
          window.location.reload();
        } else {
          window.location.reload();
        }
      } catch (error) {}
    };
    const listenPageVisible = () => {
      if (document.hidden) {
        stopUpdate();
      } else {
        startListen(true);
      }
    };
    document.addEventListener('visibilitychange', listenPageVisible);
    const listenJSError = async event => {
      if (event.target && event.target.nodeName === 'SCRIPT') {
        const scriptUrl = event.target.src;
        stopUpdate();
        await callConfirm();
      }
    };
    if (options.isListenJSError) {
      window.addEventListener('error', listenJSError);
    }
    startListen();
  }
};
/* harmony default export */ var updateListener = (ListenVersion);
;// CONCATENATED MODULE: ./packages/index.js
/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-10 16:16:52
 * @LastEditors: 舌红
 * @LastEditTime: 2024-04-28 17:11:07
 */



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
 * @param {Boolean} options.refreshSameOrigin 是否刷新同源页面，默认为true
 * @returns {Void} 无返回值
 */

/* harmony default export */ var packages_0 = (updateListener);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
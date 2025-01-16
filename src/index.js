import CountdownTimer from "./countdown.vue";

export default CountdownTimer;

// 允许全局注册组件
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("CountdownTimer", CountdownTimer);
}

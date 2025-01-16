# 基于 Vue2 简单的倒计时组件

## 安装依赖

```
vue2-countdown-component
```

## 全局引入

```
<CountdownTimer ref="countdownRef" :duration="10">
  <template #header>
    <span>头部插槽</span>
  </template>
  <template #footer>
    <span>尾部插槽</span>
  </template>
</CountdownTimer>

import CountdownTimer from "vue2-countdown-component";
Vue.component("CountdownTimer", CountdownTimer);

```

## 按需引入

```
<CountdownTimer ref="countdownRef" :duration="10">
  <template #header>
    <span>头部插槽</span>
  </template>
  <template #footer>
    <span>尾部插槽</span>
  </template>
</CountdownTimer>


import CountdownTimer from "vue2-countdown-component";

export default{
  components:{
    CountdownTimer
  }
}

```

## 参数

```
duration: {
  type: Number,
  required: true,
  default: 60,
}

```

## 事件

| 序号 | 事件  | 描述       |
| ---- | ----- | ---------- |
| 1    | start | 开始倒计时 |
| 2    | end   | 倒计时结束 |
| 3    | stop  | 倒计时暂停 |

## 事件调用方法

```
 this.$refs.[ref].start(); // 开始
 this.$refs.[ref].stop(); // 暂停

```

## 事件监听

```
<countdown-timer ref="countdownRef" :duration="10"
@end="listenEnd" @stop="listenStop" >
</countdown-timer>

listenStop() {
  this.msg = "倒计时已暂停";
},
listenEnd() {
  this.msg = "倒计时已结束";
},
```

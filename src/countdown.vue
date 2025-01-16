<template>
  <span class="countdown-timer">
    <slot name="header"></slot> {{ time }} <slot name="footer"></slot
  ></span>
</template>
<script>
export default {
  name: "CountdownTimer",
  props: {
    duration: {
      type: Number,
      required: true,
      default: 60,
    },
  },
  data() {
    return {
      timer: null,
      time: this.duration,
    };
  },
  mounted() {},
  methods: {
    start() {
      if (!this.time) {
        return;
      }
      this.$emit("start");
      this.stopCountdown();
      this.startCountdown();
    },
    stop() {
      if (!this.time || !this.timer) {
        return;
      }
      this.$emit("stop");
      this.stopCountdown();
    },
    startCountdown() {
      this.timer = setInterval(() => {
        if (this.time > 0) {
          return this.time--;
        }
        this.$emit("end");
        this.stopCountdown();
      }, 1000);
    },
    stopCountdown() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  beforeDestroy() {
    this.stopCountdown();
  },
};
</script>

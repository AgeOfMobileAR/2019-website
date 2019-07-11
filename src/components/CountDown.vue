<template>
  <div class="countdown">
    <div class="countdown-container">
      <div class="countdown-number">{{days }}</div>
      <div class="countdown-label">days</div>
    </div>

    <div class="countdown-container">
      <div class="countdown-number">{{ hours }}</div>
      <div class="countdown-label">hours</div>
    </div>

    <div class="countdown-container">
      <div class="countdown-number">{{ minutes }}</div>
      <div class="countdown-label">minutes</div>
    </div>

    <div class="countdown-container">
      <div class="countdown-number">{{ seconds }}</div>
      <div class="countdown-label">seconds</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Countdown extends Vue {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: string = "0";
  countdown: number = 0;

  convertFormat(deadline = 100, formatType: string = "seconds") {
    switch (formatType) {
      case "seconds":
        return this.timer(deadline);
      case "minutes":
        return this.timer(deadline * 60);
      case "hours":
        return this.timer(deadline * 60 * 60);
      case "days":
        return this.timer(deadline * 60 * 60 * 24);
    }
  }

  timer(seconds: number) {
    const now = Date.now();
    const then = now + seconds * 1000;

    this.countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(this.countdown);
        return;
      }

      this.displayTimeLeft(secondsLeft);
    }, 1000);
  }

  displayTimeLeft(seconds: number) {
    this.days = Math.floor(seconds / 86400);
    this.hours = Math.floor((seconds % 86400) / 3600);
    this.minutes = Math.floor(((seconds % 86400) % 3600) / 60);
    this.seconds = seconds % 60 < 10 ? `0${seconds % 60}` : `${seconds % 60}`;
  }

  mounted() {
    const date = new Date(2019, 7, 31, 9, 0, 0, 0);

    this.convertFormat(
      Math.abs(date.getTime() - new Date().getTime()) / 1000,
      "seconds"
    );
  }
}
</script>

<style scoped lang="scss">
.countdown {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  .countdown-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
    border: 5px solid rgba(255, 255, 255, 0.3);
    width: 120px;
    height: 120px;
    border-radius: 99px;

    .countdown-number {
      font-size: 2.5em;
      margin: 10px 0;
    }

    .countdown-label {
      text-transform: uppercase;
      margin-bottom: 5px;
    }
  }

  @media (max-width: 800px) {
    .countdown-container {
      font-size: 0.8em;
      width: 100px;
      height: 100px;
    }
  }
}
</style>
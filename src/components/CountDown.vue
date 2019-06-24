<template>
  <section class="countdown-container">
    <div class="days-container">
      <div class="days"></div>
      <div class="days-label">days</div>
    </div>

    <div class="hours-container">
      <div class="hours"></div>
      <div class="hours-label">hours</div>
    </div>

    <div class="minutes-container">
      <div class="minutes"></div>
      <div class="minutes-label">minutes</div>
    </div>

    <div class="seconds-container">
      <div class="seconds"></div>
      <div class="seconds-label">seconds</div>
    </div>
  </section>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Countdown extends Vue {
  countDownClock = (number = 100, format = "seconds") => {
    const d = document;
    const daysElement = d.querySelector(".days");
    const hoursElement = d.querySelector(".hours");
    const minutesElement = d.querySelector(".minutes");
    const secondsElement = d.querySelector(".seconds");
    let countdown;
    convertFormat(format);

    function convertFormat(format) {
      switch (format) {
        case "seconds":
          return timer(number);
        case "minutes":
          return timer(number * 60);
        case "hours":
          return timer(number * 60 * 60);
        case "days":
          return timer(number * 60 * 60 * 24);
      }
    }

    function timer(seconds) {
      const now = Date.now();
      const then = now + seconds * 1000;

      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        }

        displayTimeLeft(secondsLeft);
      }, 1000);
    }

    function displayTimeLeft(seconds) {
      daysElement.textContent = Math.floor(seconds / 86400);
      hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
      minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
      secondsElement.textContent =
        seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
  };

  /*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
  mounted() {
    const date = new Date(2019, 7, 31, 9, 0, 0, 0);

    this.countDownClock(
      Math.abs(date.getTime() - new Date()) / 1000,
      "seconds"
    );
  }
}
</script>

<style scoped lang="scss">
.countdown-container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.days-container,
.hours-container,
.minutes-container,
.seconds-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  border: 5px solid rgba(255, 255, 255, 0.3);
  width: 120px;
  height: 120px;
  border-radius: 99px;
}

.days,
.hours,
.minutes,
.seconds {
  font-size: 2.5em;
  margin: 10px 0;
}

.days-label,
.hours-label,
.minutes-label,
.seconds-label {
  text-transform: uppercase;
  margin-bottom: 5px;
}

@media (max-width: 800px) {
  .countdown-container {
    max-width: 90%;
  }

  .days-container,
  .hours-container,
  .minutes-container,
  .seconds-container {
    font-size: 0.8em;
    width: 100px;
    height: 100px;
  }
}
</style>
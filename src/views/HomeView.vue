<script setup>
const showHelp = () => {
  alert('This site has been made with 7.css.');
}

function calculateAge() {
  var today = new Date();
  var birthDate = new Date(2006, 8, 6); // 6th of September, 2006
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
</script>

<template>
  <div class="background">
    <div class="window glass active" style="max-width: 100%">
      <div class="title-bar">
        <div class="title-bar-text">Startpage</div>
        <div class="title-bar-controls">
          <button aria-label="Help" @click="showHelp"></button>
          <button aria-label="Minimize" disabled></button>
          <button aria-label="Close" disabled></button>
        </div>
      </div>
      <div class="window-body has-space">
        <div class="content-row">
          <div class="frame-wrapper">
            <img src="/MyFace.png" alt="Photo" class="photo">
            <img src="/VistaFrame.png" alt="Frame" class="frame">
          </div>
          <div class="intro">
            <h1>Welcome to Owen's Website</h1>
            <p>Hello, I'm Owen! This is my personal website.</p>
          </div>
        </div>
      </div>
      <div class="status-bar">
        <p class="status-bar-field">My current age: {{ calculateAge() }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$spacer: 2rem;
$window-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);
$framesize: 150px;
$frame-inset: 15px; // adjust to match your frame's border width

@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  align-items: center;
  justify-content: center;
}

.background {
  min-height: 100vh;
  @include flex-center;
  padding: $spacer;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(8, 45, 82, 0.45),
      rgba(8, 45, 82, 0.45)),
    url('/image/asadal_stock_220.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.window {
  width: min(1000px, 90vw);
  margin: 0 auto;
  overflow: hidden;
  box-shadow: $window-shadow;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  .window-body {
    min-height: 500px;
    text-align: center;
    padding: $spacer (
      $spacer * 1.25
    );

  .content-row {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .intro {
    text-align: left;
    color: #000;
  }

  p {
    margin: 0;
    font-size: 1.1rem;
    color: #000;
  }
}
}

//Profile picture css
.frame-wrapper {
  position: relative;
  width: $framesize;
  height: $framesize;
  flex-shrink: 0;
}

.photo {
  position: absolute;
  inset: $frame-inset;
  width: calc(100% - #{$frame-inset * 2});
  height: calc(100% - #{$frame-inset * 2});
  object-fit: cover;
  z-index: 0;
}

.frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
</style>

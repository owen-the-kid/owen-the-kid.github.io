<script setup>
const playerSrc = import.meta.env.BASE_URL + 'player.html'
</script>

<template>
  <div class="background">
    <iframe class="player" :src="playerSrc" title="NoisemakerFM player" allow="autoplay" />

    <div class="window glass active note">
      <div class="title-bar">
        <div class="title-bar-text">About this radio</div>
      </div>
      <div class="window-body has-space">
        <p>I made this radio for fun, and I play whatever I like on it.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  position: relative;
  min-height: calc(100vh - 30px);
  /* adjust to your nav height */
  background: #000;
}

.player {
  display: block;
  width: 100%;
  height: calc(100vh - 30px);
  border: 0;
}

.note {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 260px;
  backdrop-filter: blur(8px);
}

.note p {
  margin: 0;
  color: #000;
}
</style>

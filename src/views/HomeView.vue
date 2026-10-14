<script setup>
</script>

<template>
  <div class="background">
    <div class="window glass active" style="max-width: 100%">
      <div class="title-bar">
        <div class="title-bar-text">A glass window frame</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body has-space">
        <p>The background behind is blurred.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$spacer: 2rem;
$window-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);

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
}

.window {
  width: min(1000px, 90vw);
  margin: 0 auto;
  overflow: hidden;
  box-shadow: $window-shadow;

  .window-body {
    min-height: 220px;
    @include flex-center;
    text-align: center;
    padding: $spacer (
      $spacer * 1.25
    );

  p {
    margin: 0;
    font-size: 1.1rem;
  }
}
}
</style>

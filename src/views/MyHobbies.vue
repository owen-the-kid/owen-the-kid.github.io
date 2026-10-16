<template>
  <section class="my-hobbies">
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text">My Hobbies</div>
        <div class="title-bar-controls" aria-label="Window controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>

      <div class="window-body">
        <p>
          My hobbies are small programming projects, listening to music as played on
          NoisemakerFM, and playing around with operating systems. I also enjoy vintage
          computers and consoles which I actually play on or use for fun, and I try to
          keep them alive with services like HaikuOS, WiiLink24 (Wii Revival service),
          or Protoweb to make a comfortable &ldquo;home&rdquo; on the device.
        </p>
        <p>
          I also like SDR and surrounding radio projects, and I have a radio with
          shortwave compatibility that I tend to use from time to time.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.my-hobbies {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background: url('/image/windows_xp_14.jpg') center center / cover no-repeat fixed;
}

.window {
  width: min(100%, 78ch);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
}

.window-body {
  background: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  padding: 1.25rem 1rem 0.5rem;
}

p {
  margin: 0 0 1rem;
}
</style>

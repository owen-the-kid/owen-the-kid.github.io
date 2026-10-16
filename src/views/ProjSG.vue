<template>
  <main class="background">
    <div class="window glass active proj-sg-window">
      <div class="title-bar">
        <div class="title-bar-text">Seymour Glass fan archive</div>
        <div class="title-bar-controls">
          <button aria-label="Help" disabled></button>
          <button aria-label="Minimize" disabled></button>
          <button aria-label="Close" disabled></button>
        </div>
      </div>

      <div class="window-body has-space">
        <header class="hero">
          <div class="hero-copy">
            <p class="eyebrow">Work in progress fan site</p>
            <h1>Seymour Glass</h1>
            <p class="lede">
              A fan archive focused on preserving the band’s work, context, and the lasting feeling of
              their music for listeners who want to revisit it.
            </p>
          </div>
        </header>

        <section class="panel intro">
          <p class="section-label">Project</p>
          <h2>Why this site exists</h2>
          <p>
            This archive is meant to document the story of Seymour Glass, gather material connected to
            their recordings, and keep the band’s work in a place where fans can discover it and
            return to it easily.
          </p>
        </section>

        <section class="panel">
          <p class="section-label">Focus</p>
          <h2>What the archive is about</h2>
          <ul class="feature-list">
            <li>Documenting the band’s history and place in the Staten Island scene</li>
            <li>Gathering lyrics, references, and fan-facing context</li>
            <li>Preserving materials connected to the Note to Self disc</li>
            <li>Building a clean place to share recordings and related ephemera</li>
          </ul>
        </section>

        <section class="panel github-panel">
          <p class="section-label">GitHub</p>
          <h2>Project repo</h2>
          <p>
            This page is connected to the active project repository, where the archive work and site
            updates are tracked.
          </p>
          <Button class="repo-link" :href="repoUrl" target="_blank" rel="noreferrer">
            The Repository
          </Button>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
const repoUrl = 'https://github.com/owen-the-kid/SeymourGlassSite'
</script>

<style scoped>
.background {
  min-height: calc(100vh - 30px);
  padding: 2rem;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(8, 45, 82, 0.45), rgba(8, 45, 82, 0.45)),
    url('/image/asadal_stock_220.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.proj-sg-window {
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
}

.title-bar-controls button {
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  width: 12px;
  height: 12px;
  cursor: default;
}

.hero {
  display: flex;
  align-items: center;
  min-height: 260px;
  padding: 1.5rem 0 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
}

.hero-copy {
  max-width: 760px;
}

.eyebrow,
.section-label {
  margin: 0 0 10px;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #0f3f6f;
  font-weight: 700;
}

h1 {
  margin: 0;
  font-size: clamp(2.6rem, 6vw, 5rem);
  line-height: 0.95;
  color: #000;
}

.lede {
  max-width: 700px;
  margin-top: 18px;
  font-size: 1.08rem;
  line-height: 1.7;
  color: #1b1b1b;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.hero-actions a {
  display: inline-block;
  padding: 12px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.15s ease;
}

.hero-actions a:hover {
  transform: translateY(-1px);
}

.hero-actions a:first-child {
  background: #d4af37;
  color: #111;
}

.hero-actions .secondary {
  background: transparent;
  color: #111;
  border: 1px solid rgba(0, 0, 0, 0.35);
}

article {
  margin: 0;
}

article h2,
.panel h2,
.window-body>.panel h2 {
  margin: 0 0 18px;
  font-size: clamp(1.7rem, 2vw, 2.4rem);
  color: #000;
}

article p,
article li,
article blockquote,
.panel p,
.panel li,
.panel blockquote,
.window-body>.panel p,
.window-body>.panel li,
.window-body>.panel blockquote {
  line-height: 1.7;
  color: #1f1f1f;
}

article a,
.panel a,
.window-body>.panel a {
  color: #0f3f6f;
}

.github-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.github-panel .repo-link {
  margin-top: 0.5rem;
}

.feature-list {
  margin: 0;
  padding-left: 20px;
}

.history-grid,
.scan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.history-grid>div {
  padding: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.history-grid h3,
.lyric-block h3 {
  margin-top: 0;
  color: #000;
}

blockquote {
  margin: 0 0 24px;
  padding-left: 18px;
  border-left: 3px solid #d4af37;
  font-style: italic;
}

.lyric-block {
  padding: 18px 20px;
  border-radius: 12px;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.4);
}

.scan-card {
  margin: 0;
}

.scan-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  background: linear-gradient(135deg, rgba(120, 150, 255, 0.18), rgba(255, 255, 255, 0.12));
  color: #0e1b2d;
  font-size: 1.2rem;
  font-weight: 700;
}

.scan-card figcaption {
  margin-top: 10px;
  text-align: center;
  color: #222;
}

.audio-box {
  margin-top: 20px;
  padding: 18px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.audio-box audio {
  width: 100%;
}

.audio-note {
  margin-bottom: 0;
  color: #2d2d2d;
}

@media (max-width: 640px) {
  .background {
    padding: 1rem;
  }

  .panel {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>

<template>
  <div class="background">
    <div class="window glass active" style="max-width: 1000px; height: auto;">
      <div class="title-bar">
        <div class="title-bar-text">My Experience</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize" disabled></button>
          <button aria-label="Maximize" disabled></button>
          <button aria-label="Close" disabled></button>
        </div>
      </div>

      <div class="window-body has-space">
        <div class="tab-pane">
          <div class="section-title">My Experience</div>

          <fieldset class="group-box">
            <legend class="text-bold">{{ role.title }}</legend>

            <div class="field-row header-row">
              <span><strong>{{ role.employer }}</strong></span>
              <span class="text-small">{{ role.range }}</span>
            </div>

            <p class="section-copy">{{ role.description }}</p>

            <div v-for="skill in role.skills" :key="skill.label" class="field-row skill-row">
              <label>{{ skill.label }}</label>
              <div role="progressbar" class="animate" :aria-valuenow="skill.value" aria-valuemin="0"
                aria-valuemax="100">
                <div :style="{ width: skill.value + '%' }"></div>
              </div>
            </div>

            <div class="takeaways-box">
              <strong>Key Takeaways:</strong> {{ role.takeaways }}
            </div>
          </fieldset>

          <div class="section-title">Applied Infrastructure Projects</div>

          <div class="field-row-stacked project-grid">
            <fieldset v-for="project in projects" :key="project.title" class="group-box project-card">
              <legend class="text-bold">{{ project.title }}</legend>

              <div class="field-row meta-row">
                <label><strong>Role:</strong></label>
                <span>{{ project.role }}</span>
              </div>

              <div class="field-row meta-row">
                <label><strong>Stack:</strong></label>
                <span>{{ project.stack }}</span>
              </div>

              <p class="section-copy">{{ project.description }}</p>

              <ul class="list-group">
                <li v-for="item in project.bullets" :key="item"><span v-html="item"></span></li>
              </ul>

            </fieldset>
          </div>

          <div class="section-title">Technical Philosophy</div>

          <div class="message-box">
            <p>{{ philosophy }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const role = {
  title: 'Front-End Developer Intern',
  employer: 'IKDB Innovatielab',
  range: '25-08-2025 / 30-01-2026',
  description:
    'Learned Vue.js from scratch during my time at IKDB while already having a hobby-level understanding of Node.js and JavaScript. My focus was on practical front-end work, Docker, environment variables, and deployment workflows in a real team setting, with Linux and self-hosted systems becoming a major part of my hands-on learning. I also have experience with C#, PHP, MySQL, MSSQL, and Unity from personal and project-based work.',
  skills: [
    { label: 'Vue.js', value: 80 },
    { label: 'Node.js', value: 65 },
    { label: 'Docker', value: 75 },
    { label: 'Linux / VPS', value: 70 },
    { label: 'C#', value: 65 },
    { label: 'PHP', value: 65 },
    { label: 'MySQL', value: 70 },
    { label: 'MSSQL', value: 45 },
    { label: 'Unity', value: 75 }
  ],
  takeaways:
    'Gained practical experience with Vue-based development, environment configuration, service setup, and the realities of managing Linux hosts and self-hosted projects outside the classroom, while also building a broader programming foundation across backend, database, and game-development tools.'
}

const projects = [
  {
    title: 'School Game Project: Ocean Cleanup Survival',
    role: 'Co-Developer',
    stack: 'Unity, C#, Game Design Elective',
    description:
      'Created a small game as part of our Game Design elective with a friend, centered around cleaning trash from the ocean and selling it at shore or a sea rig to upgrade equipment and progress through the game.',
    bullets: [
      '<strong>Core Gameplay:</strong> Built a progression loop where the player collected waste, sold it for resources, and upgraded equipment such as <strong>flashlight, oxygen, carrying capacity, and health</strong>.',
      '<strong>Game Goal:</strong> Designed the game to end when the player reached the maximum level, creating a clear progression goal and reward structure.',
      '<strong>Systems:</strong> Implemented item progression and shop-based upgrades in <strong>Unity</strong>, giving me practical experience with gameplay systems and player progression design.'
    ]
  },
  {
    title: 'Side Project: Minecraft Server & Compatibility Testing',
    role: 'Independent Setup & Maintenance',
    stack: 'Debian, Hetzner, Fabric, GeyserMC, ViaFabric, PufferPanel',
    description:
      'A personal project for friends and family, used mainly to experiment with server setup, compatibility layers, and performance tuning rather than as a formal production deployment.',
    bullets: [
      '<strong>Compatibility:</strong> Set up <strong>GeyserMC</strong> and <strong>ViaFabric</strong> to support mixed Java and Bedrock players, while testing Java version compatibility and mod behavior.',
      '<strong>Optimization:</strong> Evaluated Fabric configurations and tested mods that improve performance, stability, and resource usage on a budget VPS.',
      '<strong>Infrastructure:</strong> Used a Linux host, swap tuning, reverse proxy access, and process management to keep the environment stable while learning by doing.'
    ]
  },
  {
    title: 'Linux, Custom OS & Self-Hosted Systems',
    role: 'Self-Directed Learning',
    stack: 'Ubuntu, Bazzite, SteamOS, Arch, Fedora, OpenSUSE, Debian, Alpine, FreeBSD, HaikuOS, Wine/DirectX',
    description:
      'A large part of my technical learning came from working with Linux and custom system setups on my own machines, including desktop environments, compatibility layers, and hobbyist self-hosting.',
    bullets: [
      '<strong>OS Experience:</strong> Ran <strong>Ubuntu</strong> on my main laptop for several years and later set up a Bazzite PC for shared home use and a SteamOS setup for personal gaming.',
      '<strong>Compatibility:</strong> Configured <strong>Wine</strong> and <strong>DirectX</strong> settings to run <strong>ArmaKrog</strong> and explored how different Linux environments behave with Windows software.',
      '<strong>System-Level Tinkering:</strong> Worked with <strong>Arch, Fedora, OpenSUSE, Debian, Alpine, FreeBSD, and HaikuOS</strong>, and also explored rooted/custom ROM setups on Android devices, which reinforced my understanding of configuration, troubleshooting, and system behavior.'
    ]
  }
]

const philosophy =
  'My approach is practical and hands-on. I learned a lot from working with Linux, Docker, self-hosted services, and personal projects, and I value understanding the actual system behind the application rather than hiding it behind abstraction. I’m comfortable with environment setup, service configuration, and troubleshooting as part of a real deployment workflow.'
</script>

<style lang="scss">
body {
  margin: 0;
  min-height: 100vh;
  background-image: url('/image/miscellaneous_41.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.background {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
}

.window {
  width: min(1000px, 92vw);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.28);
}

.window.glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.28);
}

.window-body {
  color: #000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.window-body.has-space {
  padding: 1rem 1.25rem;
}

.title-bar {
  background: linear-gradient(90deg, #000080, #1084d0);
  color: #fff;
}

.menu-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem 0.5rem;
  background: #ece9d8;
  border-bottom: 1px solid #aca899;
}

.menu-item {
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  line-height: 1.3;
  color: #000;
}

.status-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.25rem 0.5rem;
  background: #ece9d8;
  border-top: 1px solid #aca899;
}

.status-bar-field {
  margin: 0;
  font-size: 0.78rem;
  color: #000;
}

.section-title {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #000;
}

.group-box,
.message-box,
.takeaways-box {
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid #aca899;
}

.group-box {
  padding: 1rem;
  margin-bottom: 2rem;
}

.group-box legend {
  color: #000080;
  font-weight: 700;
}

.field-row,
.field-row-stacked {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-row,
.meta-row {
  justify-content: space-between;
}

.skill-row {
  align-items: center;
  margin: 0.75rem 0;
}

.skill-row label {
  width: 100px;
  font-weight: 600;
}

[role='progressbar'] {
  flex: 1;
  min-width: 0;
  height: 1.2rem;
  border: 1px inset #fff;
  background: linear-gradient(#e7e7e7, #d0d0d0);
  box-shadow: inset 1px 1px 0 #fff, inset -1px -1px 0 #7e7e7e;
  overflow: hidden;
}

.animate {
  animation: pulse-progress 1.2s ease-in-out infinite alternate;
}

@keyframes pulse-progress {
  from {
    filter: brightness(1);
  }

  to {
    filter: brightness(1.08);
  }
}

.section-copy {
  margin: 0.75rem 0 1rem;
  line-height: 1.5;
  color: #111;
}

.list-group {
  margin: 0.75rem 0 0;
  padding-left: 1.4rem;
  line-height: 1.5;
}

.takeaways-box {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #e5e5d8;
}

.message-box {
  padding: 1rem;
  background: #ffffe1;
}

.project-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.project-card {
  margin-bottom: 0;
}

.action-row {
  justify-content: flex-end;
  margin-top: 1rem;
}

.btn {
  font-family: 'Segoe UI', sans-serif;
}

@media (max-width: 768px) {
  .window {
    width: 95vw !important;
  }

  .field-row,
  .field-row-stacked {
    flex-direction: column;
    align-items: flex-start;
  }

  .skill-row label {
    width: auto;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>

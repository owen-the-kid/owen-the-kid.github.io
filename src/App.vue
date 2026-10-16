<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <nav aria-label="Main menu">
    <ul role="menubar" class="can-hover">
      <li role="menuitem" tabindex="0" aria-haspopup="true">
        Home
        <ul role="menu">
          <li role="menuitem"><a href="/">Overview</a></li>
        </ul>
      </li>
      <li role="menuitem" tabindex="0" aria-haspopup="true">
        Projects
        <ul role="menu">
          <li role="menuitem"><a href="/projradio">NoisemakerFM</a></li>
          <li role="menuitem"><a href="/projsg">Seymour Glass</a></li>
        </ul>
      </li>
      <li role="menuitem" tabindex="0" aria-haspopup="true">
        About
        <ul role="menu">
          <li role="menuitem"><a href="#CV">My CV</a></li>
          <li role="menuitem"><a href="/myexp">My Experience</a></li>
          <li role="menuitem"><a href="/myhobbies">My Hobbies</a></li>
        </ul>
      </li>
      <li role="menuitem" tabindex="0" aria-haspopup="true">
        Contact
        <ul role="menu">
          <li role="menuitem"><a href="mailto:owenramaekers2006@gmail.com">Email
              <span>owenramaekers2006@gmail.com</span></a></li>
          <li role="menuitem"><a href="https://github.com/owen-the-kid" target="_blank"
              rel="noreferrer">Github<span>OwenTheKid</span></a></li>
          <li role="menuitem"><a href="https://spacehey.com/profile?id=2909288" target="_blank"
              rel="noreferrer">SpaceHey<span>Owen</span></a></li>
          <li role="menuitem"><a href="https://bsky.app/profile/owenramaekers.bsky.social" target="_blank"
              rel="noreferrer">Bluesky<span>@owenramaekers.bsky.social</span></a></li>
        </ul>
      </li>
    </ul>
  </nav>

  <RouterView />
</template>

<style scoped lang="scss">
nav {
  position: relative; // z-index only applies to positioned elements
  z-index: 10; // above the canvas (0) and the window (1)
}
</style>

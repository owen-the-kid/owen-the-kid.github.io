import Webamp from 'webamp'

const radioUrl = 'https://noisemakerfm.duckdns.org/listen/noisemaker_fm/radio.mp3'
const container = document.getElementById('app')

function unwrap(mod, key) {
  let m = mod
  for (let i = 0; i < 5; i++) {
    if (m && typeof m[key] === 'function') return m
    m = m?.default
  }
  return null
}

const [bcMod, presetsMod] = await Promise.all([
  import('butterchurn'),
  import('butterchurn-presets'),
])
const butterchurn = unwrap(bcMod, 'createVisualizer')
const presetsLib = unwrap(presetsMod, 'getPresets')

const options = {
  initialTracks: [
    { metaData: { artist: 'NoisemakerFM', title: 'Live stream' }, url: radioUrl },
  ],
  __initialWindowLayout: {
    main: { position: { x: 0, y: 0 } },
    equalizer: { position: { x: 0, y: 116 } },
    playlist: { position: { x: 0, y: 232 }, size: [0, 2] },
    milkdrop: { position: { x: 275, y: 0 }, size: [8, 14] },
  },
}

if (butterchurn && presetsLib) {
  options.__butterchurnOptions = {
    importButterchurn: () => Promise.resolve(butterchurn),
    getPresets: () => {
      const presets = presetsLib.getPresets()
      return Object.keys(presets).map((name) => ({
        name,
        butterchurnPresetObject: presets[name],
      }))
    },
    butterchurnOpen: true,
  }
} else {
  console.error('Butterchurn modules:', bcMod, presetsMod)
}

const webamp = new Webamp(options)

// Reopen button, shown if the main window gets closed
const reopen = document.createElement('button')
reopen.textContent = 'Reopen player'
reopen.style.cssText = 'position:absolute;top:1rem;left:1rem;z-index:100000;display:none'
reopen.onclick = () => {
  webamp.reopen()
  reopen.style.display = 'none'
}
document.body.appendChild(reopen)
webamp.onClose(() => { reopen.style.display = 'block' })

await webamp.renderWhenReady(container)

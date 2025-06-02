import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
  presetWebFonts
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts(
      {
        provider: 'google',
        fonts: {
          sans: ['Rubik'],
          winky: ['Khand'],
          Mono: ['Share Tech Mono','Ma Shan Zheng']
        }
      }
    )
  ],
  rules: [
    ['bg-dark-mode', { 'background-color': 'rgb(18,18,18)' }],
    ['bg-dark-mode-op', { 'background-color': 'rgba(18,18,18,0.2)' }]
  ]
})
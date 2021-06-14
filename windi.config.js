import { defineConfig } from 'windicss/helpers'
import { transform } from 'windicss/helpers'

export default defineConfig({
  plugins: [transform('daisyui')],
  theme: {},
  variants: {},
})

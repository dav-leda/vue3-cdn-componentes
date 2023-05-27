import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import App from './app.js'
import * as customDirectives from './directives/customDirectives.js'

// create(app).mount('#app')

// Declarar custom directives antes del mount:
createApp(App)
  .directive('happy', customDirectives.happy)
  .directive('sad', customDirectives.sad)
  .mount('#app')


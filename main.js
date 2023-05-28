
// Importar el método createApp de la versión esm-browser de Vue:
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// Importar el componente raíz de la aplicación (App):
import App from './app.js'

// Importar directivas "custom" (esto lo pueden omitir):
import * as customDirectives from './directives/customDirectives.js'

// Al usar componentes, la forma más correcta de declarar
// el método createApp es así:

// createApp(App).mount('#app')

// Si se usan directivas "custom", declararlas antes del mount:
createApp(App)
  .directive('happy', customDirectives.happy)
  .directive('sad', customDirectives.sad)
  .mount('#app')


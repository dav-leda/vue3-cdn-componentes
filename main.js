
// Importar el método createApp de la versión esm-browser de Vue:
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// Importar el componente raíz de la aplicación (App):
import App from './app.js'

// Al usar componentes la forma recomendada
// para montar la aplicación es esta:
createApp(App).mount('#app')





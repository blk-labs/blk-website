import { createApp } from 'vue'
import { router } from './router/index'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import './index.css'

const app = createApp(App)
app.use(router)
app.use(plugin, defaultConfig)

//global component registration
const components = import.meta.globEager('./components/*.vue')
Object.entries(components).forEach(([path, definition]) => {
  // Get name of component, based on filename
  // "./components/Fruits.vue" will become "Fruits"
  const componentName = path.split('/').pop()!.replace(/\.\w+$/, '')

  // Register component on this Vue instance
  app.component(componentName, definition.default)
})

app.mount('#app')
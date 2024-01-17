import './assets/main.css'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'bulma/css/bulma.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Sidebar from 'primevue/sidebar'
import Dropdown from 'primevue/dropdown'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.component('PButton', Button)
app.component('PInputText', InputText)
app.component('PDataTable', DataTable)
app.component('PColumn', Column)
app.component('PSidebar', Sidebar)
app.component('PDropdown', Dropdown)

app.mount('#app')

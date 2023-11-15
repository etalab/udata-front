import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';

import App from './App.vue';

const i18n = createI18n({
  locale: 'en',
  messages,
});

createApp(App)
.use(i18n)
.mount('#app');

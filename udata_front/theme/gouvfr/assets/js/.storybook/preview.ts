import "../../less/style.less";
import "../dsfr";
import "@gouvfr/dsfr/dist/dsfr/dsfr.module";
import Toaster from "@conciergerie.dev/vue-toaster";
import { setup } from '@storybook/vue3';
import i18n from "../i18n";
import Api from "../plugins/api";
import Container from "../components/Ui/Container/Container.vue";
import { type RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

setup((app) => {
  app.use(Api);
  app.use(i18n);


  const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Container },
    { path: '/datasets', component: Container },
    { path: '/reuses', component: Container },
  ];

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  app.use(router);

  app.use(Toaster, {
    duration: false,
    dismissible: true,
  }).provide('toast', app.config.globalProperties.$toast);
});

globalThis.dsfr.start();

const preview = {
  decorators: [
    (story, ctx) => {
      return {
        components: { story },
        template: ctx.title.includes("Pages") ? `<story />` : `<div class="fr-container"><story /></div>`,
      };
    },
  ],
};

export default preview;
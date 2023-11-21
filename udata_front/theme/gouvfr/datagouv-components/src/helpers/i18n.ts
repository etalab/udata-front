import dayjs from "dayjs/esm";
import LocalizedFormat from 'dayjs/esm/plugin/localizedFormat';
import RelativeTime from "dayjs/esm/plugin/relativeTime";
import { createI18n } from "vue-i18n";
import messages from '@intlify/unplugin-vue-i18n/messages';
import { only_locales, default_lang } from "../config";
import { getRegisteredTranslations } from "@etalab/udata-front-plugins-helper";

const locales = only_locales.split(",");
if(!locales.includes(default_lang)) {
  throw new Error("Default lang is not in only locales, it won't be loaded");
}

const modules = import.meta.glob<{default: any}>("/node_modules/dayjs/esm/locale/*.js");
let langPromises = [];
for (let path in modules) {
  let locale = path.split("/").pop()?.split(".").shift() ?? "";
  if(locales.includes(locale)) {
    langPromises.push(modules[path]());
  }
}
const isFulfilled = <T>(result: PromiseSettledResult<T>): result is PromiseFulfilledResult<T> => result.status === 'fulfilled';

Promise.allSettled(langPromises).then(results => {
  const loadedLocales = results
    .filter(isFulfilled)
    .map(result => result.value.default);
  for(let loadedLocale of loadedLocales) {
    dayjs.locale(loadedLocale, null, true);
  }
  dayjs.locale(default_lang);
});

dayjs.extend(LocalizedFormat);
dayjs.extend(RelativeTime, {
  thresholds: [
    { l: 'd', r: 1 },
    { l: 'dd', r: 29, d: 'day' },
    { l: 'M', r: 1 },
    { l: 'MM', r: 11, d: 'month' },
    { l: 'y', r: 1 },
    { l: 'yy', d: 'year' }
  ],
});

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: default_lang,
  messages,
  formatFallbackMessages: true
});

/** @type {Record<string, boolean>} */
const loadedModules = {};

/**
 * Reload translations from plugins if they aren't already loaded
 */
export function reloadLocale() {
  const translations = getRegisteredTranslations();
  /** @type {Record<string, object>} */
  let messages = {};
  for (let translation of translations) {
    if(translation.module) {
      if (loadedModules[translation.module]) {
        continue;
      }
      loadedModules[translation.module] = true;
    }
    messages = {...messages, ...translation.messages[default_lang]};
  }
  i18n.global.mergeLocaleMessage(default_lang, messages);
}

export { dayjs, i18n };
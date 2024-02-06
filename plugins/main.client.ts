import config from '../package.json';
import { WebStorageKeys } from '~/lib/values/general.values';

/**
 * Register any vue plugins here, eg. nuxtApp.vueApp.use(VueApexCharts);
 */
export default defineNuxtPlugin(_nuxtApp => {
  if (window) {
    versionCheck();
  }
});

function versionCheck() {
  const version = config.version || '1.0.0';

  if (localStorage) {
    const userVersion = localStorage.getItem(WebStorageKeys.APP_VERSION);
    if (!userVersion) {
      localStorage.setItem(WebStorageKeys.APP_VERSION, version);
    } else if (version > userVersion) {
      localStorage.setItem(WebStorageKeys.APP_VERSION, version);
      window.location.reload();
    }
  }
}

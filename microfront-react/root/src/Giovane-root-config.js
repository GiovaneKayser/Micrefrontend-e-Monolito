import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@Giovane/article",
  app: () => System.import("@Giovane/article"),
  activeWhen: (location) => location.pathname === '/article',
});

registerApplication({
  name: "@Giovane/sidebar",
  app: () => System.import("@Giovane/sidebar"),
  activeWhen: (location) => location.pathname === '/sidebar',
});

registerApplication({
  name: "@Giovane/page",
  app: () => System.import("@Giovane/page"),
  activeWhen: () => true,
});

registerApplication({
  name: "@Giovane/footer",
  app: () => System.import("@Giovane/footer"),
  activeWhen: (location) => location.pathname === '/footer',
});

registerApplication({
  name: "@Giovane/appreciation",
  app: () => System.import("@Giovane/appreciation"),
  activeWhen: (location) => location.pathname === '/appreciation',
});

start({
  urlRerouteOnly: true,
});

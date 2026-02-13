import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://19aba90dbd6bc50e7a7d87c2394c8d53@o4510879810912256.ingest.de.sentry.io/4510879818842192",
  sendDefaultPii: true,
});
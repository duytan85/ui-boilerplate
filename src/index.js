import nconf from 'nconf';
import express from 'express';
import path from 'path';
import health from 'express-ping';
import favicon from 'serve-favicon';

import './utils/appGlobals';

// -------------------------------------------------
// SETTINGS
// -------------------------------------------------
nconf.argv()
  .env()
  .file(`./config/env/${nconf.get('NODE_ENV')}.json`);

const app = express();
const port = nconf.get('APP_PORT') || 3000;

app.use(favicon(path.join(__dirname, '../', 'public', 'favicon.ico')));

// -------------------------------------------------
// ROUTES
// -------------------------------------------------
app.use(health.ping('/health-check'));

app.get('*', require('./server').default);

app.listen(port, (err) => {
  if (err) {
    console.error('');
    console.error('🔥 🔥 🔥  ERROR: 💩 There\'s been an error!!! 🔥 🔥 🔥');
    console.error(`${err}`);
    console.error('');
    return;
  }

  console.info('');
  console.info(`✅  Server running on 👉 👉 👉  http://localhost:${__DEV__ ? port - 1 : port} 👈 👈 👈 `);
  console.info(`🏠  NODE_ENV has been set to: ${nconf.get('NODE_ENV') || 'production'}`);
  console.info('');
});

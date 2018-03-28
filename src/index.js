import nconf from 'nconf';
import express from 'express';
import health from 'express-ping';

import './utils/isomorphicGlobals';

// -------------------------------------------------
// SETTINGS
// -------------------------------------------------
nconf.argv()
  .env()
  .file(`./config/env/${nconf.get('NODE_ENV')}.json`);

const app = express();
const port = nconf.get('APP_PORT') || 3000;

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
  console.info(`✅  Server running on 👉 👉 👉  http://localhost:${port} 👈 👈 👈 `);
  console.info(`🏠  NODE_ENV has been set to: ${nconf.get('NODE_ENV')}`);
  console.info('');
});

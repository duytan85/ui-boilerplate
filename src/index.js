import express from 'express';
import path from 'path';
import proxy from 'http-proxy-middleware';
import health from 'express-ping';
import favicon from 'serve-favicon';

// -------------------------------------------------
// SETTINGS
// -------------------------------------------------
global.__DEV__ = process.env.NODE_ENV === 'development';

const app = express();
const port = process.env.APP_PORT;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(favicon(path.join(__dirname, '../', 'public', 'favicon.ico')));

// -------------------------------------------------
// ROUTES
// -------------------------------------------------
app.use(health.ping('/health-check'));

app.use('/search', proxy({ target: process.env.ITUNES_URL, changeOrigin: true }));

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
  console.info(`✅  Server running on 👉 http://localhost:${__DEV__ ? process.env.DEV_SERVER_PORT : port} 👈`);
  console.info(`🏠  NODE_ENV has been set to: ${process.env.NODE_ENV}`);
  console.info('');
});

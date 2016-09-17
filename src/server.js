import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server on!');
});

process.on('uncaughtException', err => console.error('uncaught exception:', err));
process.on('unhandledRejection', error => console.log('unhandled rejection:', error));

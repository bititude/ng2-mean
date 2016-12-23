import app from './server';
import mongoose from 'mongoose';

after(function(done) {
  app.slapApp.on('close', () => done());
  mongoose.connection.close();
  app.slapApp.close();
});

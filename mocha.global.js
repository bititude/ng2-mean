import app from './server';
import mongoose from 'mongoose';

after(function(done) {
  app.ng2MeanApp.on('close', () => done());
  mongoose.connection.close();
  app.ng2MeanApp.close();
});

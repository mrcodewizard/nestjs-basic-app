import { NestFactory } from '@nestjs/core';
import { AppModule } from '@modules/app/app.module';
import * as mongoose from "mongoose";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4000;

  // Connect to MongoDB and listen for events
  await mongoose.connect('mongodb://127.0.0.1:27017/authdb');

  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });


  await app.listen(port);
}
bootstrap();

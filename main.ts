import { NestFactory } from '@nestjs/core';
import { AppModule } from '@modules/app/app.module';
import * as mongoose from "mongoose";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4000;

  // Connect to MongoDB and listen for events
  await mongoose.connect('mongodb+srv://mubashirrahman503:<password>@tododb.ddmwhia.mongodb.net/?retryWrites=true&w=majoritymongodb+srv://mubashirrahman503:Mcsm@1635@tododb.ddmwhia.mongodb.net/?retryWrites=true&w=majority');

  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });


  await app.listen(port);
}
bootstrap();

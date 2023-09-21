import { NestFactory } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppModule } from '@modules/app/app.module';
import * as mongoose from "mongoose";
import * as express from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.urlencoded({ extended: true}));

  try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      "mongodb+srv://admin:Mcsm%401635@tododb.gz1gbsf.mongodb.net/tododb?retryWrites=true&w=majority&ssl=true",
    );
  } catch (e) {
    console.log("could not connect");
  }
  
  const connecion = mongoose.connection;
  connecion.on("error", (err) => console.log(`Connection error ${err}`));
  connecion.once("open", () => console.log("Connected to DB!"));


  const port = process.env.PORT || 8080 || 80;
  await app.listen(port);
}
bootstrap();

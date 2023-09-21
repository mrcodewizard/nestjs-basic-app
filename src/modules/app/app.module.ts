import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthenticationModule } from '@modules/authentication/authentication.module';
import { AppService } from './app.service';
import { TodoModule } from '@modules/todo/todo.module';

const connectionConfigs = {
  username: "admin",
  password: "Mcsm%401635",
  host: "tododb.gz1gbsf.mongodb.net",
  db: "tododb"
}
const { 
  username,
  password,
  host,
  db
} = connectionConfigs;

console.log(host.split(".").length);


@Module({
  // Connect to MongoDB and listen for events
  // mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
  imports: [
    AuthenticationModule, 
    TodoModule,
    MongooseModule.forRoot(`mongodb+srv://${username}:${password}@${host}/${db}?retryWrites=true&w=majority&ssl=true`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

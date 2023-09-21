import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthenticationModule } from '@modules/authentication/authentication.module';
import { AppService } from './app.service';
import { TodoModule } from '@modules/todo/todo.module';

@Module({
  imports: [
    AuthenticationModule, 
    TodoModule,
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/authdb")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

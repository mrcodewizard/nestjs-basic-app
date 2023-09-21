import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as JWT from 'jsonwebtoken';
import { Todo, TodoSchema } from '@schemas/todo.schema';
import { ResponseInterface } from '@interfaces/response.interface';

@Injectable()
export class TodoService {
   constructor(@InjectModel(Todo.name) private todoModel : Model<Todo>) {}

   async createTodo(todo: Todo, token: any): Promise<Todo | ResponseInterface| null > {
      try {
         /** check if the token is valid or not **/
         const secretKey = "ro8BS6Hiivgzy8Xuu09JDjlNLnSLldY5";
         const verify = JWT.verify(token, secretKey);

         if(!verify) {
            return {
               status: 403,
               msg: "Unauthorize access !!! Please login first"
            }
         }
         const todoItem = new this.todoModel(todo);
         return await todoItem.save();
      } catch(error) {
         throw new Error('Validation failed: ' + error.message);
      }
   }

}

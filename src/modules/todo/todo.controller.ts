import { Controller, Get, Post, Put, Delete, Req, Body } from '@nestjs/common';
import { Response, Request } from 'express';
import { TodoService } from './todo.service';
import { TodoInterface } from '@interfaces/todo.interface';
import { todoSchema } from '@validations/todo.validation';


@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post("/create") 
  async createTodo(@Body() todo: TodoInterface, @Req() request: Request ) {
    try {
      const token = request.headers["jwt_token"];
      if(!token) return {
        status: 400,
        msg: "unauthorize access"
      } 

      await todoSchema.validateAsync(todo);
      const response = await this.todoService.createTodo(todo,token);

      if(!response) {
        return {
          status: 404,
          msg: "Unable to create todo item"
        };
      } else {
        return {
          status: 200,
          msg: "Todo Item created succesfully",
          user: response
        }
      }
    }
    catch(error) {
      console.error('Validation error:', error.message);
      return {
       status: 400,
       msg: `Error! ${error.message}`
      }
    }
  }
}

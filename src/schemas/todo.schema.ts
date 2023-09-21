import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
   @Prop({ required: true})
   id:number

   @Prop({ required: true})
   info: string
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
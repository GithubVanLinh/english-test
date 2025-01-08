import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export class Answers {
  text: string;
  isTrue: boolean;
}

@Schema()
export class Questions {
  @Prop()
  text: string;

  @Prop()
  answers: Answers[];

  @Prop()
  explain: string;
}

export type QuestionDocument = HydratedDocument<Questions>;
export const QuestionSchema = SchemaFactory.createForClass(Questions);

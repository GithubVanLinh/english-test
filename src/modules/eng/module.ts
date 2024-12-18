import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Questions, QuestionSchema } from './model';
import { QuestionController } from './controller';
import { QuestionService } from './service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Questions.name, schema: QuestionSchema },
    ]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}

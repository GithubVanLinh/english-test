import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddQuestionDto } from './dto/add_question_dto';
import { QuestionService } from './service';

@Controller('/questions')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Post()
  async addQuestion(@Body() data: AddQuestionDto) {
    return await this.questionService.addQuestion(data);
  }

  @Get()
  async getQuestions() {
    return await this.questionService.getQuestions();
  }
}

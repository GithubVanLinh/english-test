import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Questions } from './model';
import { Model } from 'mongoose';
import { AddQuestionDto } from './dto/add_question_dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Questions.name) private questionModel: Model<Questions>,
  ) {}

  async addQuestion(ques: AddQuestionDto) {
    return await this.questionModel.create(ques);
  }

  async getQuestions() {
    return await this.questionModel.find({});
  }
}

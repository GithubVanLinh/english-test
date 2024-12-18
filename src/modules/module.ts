import { Module } from '@nestjs/common';
import { QuestionModule } from './eng/module';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from 'src/intercepters/transform';
import { ConfigModule } from '@nestjs/config';
import { MainController } from './controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://don:pass@cluster0.1uvxs.mongodb.net/',
    ),
    QuestionModule,
  ],
  controllers: [MainController],
  providers: [{ provide: APP_INTERCEPTOR, useClass: TransformInterceptor }],
})
export class AppModule {}

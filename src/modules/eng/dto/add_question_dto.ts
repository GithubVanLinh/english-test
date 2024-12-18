export class AddQuestionDto {
  text: string;
  answers: { text: string; isTrue: boolean }[];
  choose?: number;
}

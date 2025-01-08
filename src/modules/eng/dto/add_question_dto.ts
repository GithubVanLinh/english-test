export class AddQuestionDto {
  text: string;
  answers: { text: string; isTrue: boolean }[];
  explain: string;
  choose?: number;
}

export class AnswerQuestionModel {
  question: string
  type: QuestionType
  answer: string
  constructor(response: any) {
    this.question = response.question
    this.type = response.type
    this.answer = response.answer
  }
}

export enum QuestionType {
  TEXT = 'Text',
  MULTIPLE_CHOICE = 'MultipleChoice',
  NUMERIC = 'Numeric',
  NONE = 'None'
}

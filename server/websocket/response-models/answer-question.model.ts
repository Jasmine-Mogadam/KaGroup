export class AnswerQuestionModel {
  question: string
  type: QuestionType
  answer: string
  choices: string[] | null
  constructor(response: any) {
    this.question = response.question
    this.type = response.type
    this.answer = response.answer
    this.choices = response.choices
  }
}

export enum QuestionType {
  TEXT = 'Text',
  MULTIPLE_CHOICE = 'MultipleChoice',
  NUMERIC = 'Numeric',
  NONE = 'None'
}

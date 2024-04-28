import type { QuestionType } from "./QuestionType"
import type { QuestionPack } from "./QuestionPack"
interface Question {
    QuestionType:QuestionType,
    QuestionText:string,
    QuestionPreEntered:boolean,
    QuestionOptions:Array<string>,
    QuestionPack: QuestionPack
  }

export type {Question}

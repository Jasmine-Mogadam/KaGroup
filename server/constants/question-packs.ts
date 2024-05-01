import { AnswerQuestionModel } from "../websocket/response-models/answer-question.model.ts";
import { QuestionType } from "../websocket/response-models/answer-question.model.ts";
export const demoquestions: AnswerQuestionModel[] = [
  /**
   *     this.question = response.question
    this.type = response.type
    this.answer = response.answer
    this.choices = response.choices
   */
  new AnswerQuestionModel({
    type:QuestionType.MULTIPLE_CHOICE,
    question:'Gender identity',
    choices:['Woman','Man','Transgender Woman','Transgender Man','Non-Binary','Agender/I don\'t with any gender', 'Gender not listed/prefer not to state'],
  }),
  new AnswerQuestionModel({
    type:QuestionType.MULTIPLE_CHOICE,
    question:'Race',
    choices:['American Indian/Alaska Native','Asian','Black','Native Hawaiian','Pacific Islanders','White', 'Decline to Respond'],
  }),
  new AnswerQuestionModel({
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I would consider myself more of a big-picture thinker than detail-oriented',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I see myself as someone who is outgoing, sociable',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I see myself as someone who tends to find fault with others',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I see myself as someone who does a thorough job',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I see myself as someone who is relaxed, handles stress well',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I see myself as someone who has few artistic interests',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I would like to act as a leader',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    type:QuestionType.TEXT,
    question:'Would you rather have unlimited bacon but no more games, or games (unlimited games) and no games? Answer honestly.',
    choices:[],
  })
]

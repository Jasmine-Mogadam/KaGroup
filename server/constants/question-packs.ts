import { AnswerQuestionModel } from "../websocket/response-models/answer-question.model.ts";
import { QuestionType } from "../websocket/response-models/answer-question.model.ts";

export const antultimatequestion: AnswerQuestionModel = new AnswerQuestionModel({
  answer: null,
  type:QuestionType.NONE,
  question:'',
  choices:[]
});

export const demoquestions: AnswerQuestionModel[] = [
  new AnswerQuestionModel({
    answer: null,
    type:QuestionType.MULTIPLE_CHOICE,
    question:'Gender identity',
    choices:['Woman','Man','Transgender Woman','Transgender Man','Non-Binary','Agender/I don\'t with any gender', 'Gender not listed/prefer not to state'],
  }),
  new AnswerQuestionModel({
    answer: null,
    type:QuestionType.MULTIPLE_CHOICE,
    question:'Race',
    choices:['American Indian/Alaska Native','Asian','Black','Native Hawaiian','Pacific Islanders','White', 'Decline to Respond'],
  }),
  new AnswerQuestionModel({
    answer: null,
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I would consider myself more of a big-picture thinker than detail-oriented',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    answer: null,
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I see myself as someone who is outgoing, sociable',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    answer: null,
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I see myself as someone who does a thorough job',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    answer: null,
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I see myself as someone who is relaxed, handles stress well',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    answer: null,
    type:QuestionType.MULTIPLE_CHOICE,
    question:'I would like to act as the leader of my group',
    choices:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
  }),
  new AnswerQuestionModel({
    answer: null,
    type:QuestionType.TEXT,
    question:'Would you rather have unlimited bacon but no more games, or games (unlimited games) and no games? Answer honestly.',
    choices:[],
  }),
  new AnswerQuestionModel({
    answer: null,
    type:QuestionType.TEXT,
    question:'Do you think Jake Paul will beat Mike Tyson? Justify your answer.',
    choices:[],
  })
]

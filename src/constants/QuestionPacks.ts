import type { Question } from "@/types/Question";
export const demoquestions: Question[] = [
  {
    QuestionType:'multiple',
    QuestionText:'Gender',
    QuestionPreEntered:false,

    QuestionOptions:['Woman','Man','Transgender Woman','Transgender Man','Non-Binary','Agender/I don\'t with any gender', 'Gender not listed/prefer not to state'],
    QuestionPack: 'catme'
  },
  {
    QuestionType:'multiple',
    QuestionText:'Race',
    QuestionPreEntered:false,
    QuestionOptions:['American Indian/Alaska Native','Asian','Black','Native Hawaiian','Pacific Islanders','White', 'Decline to Respond'],
    QuestionPack: 'catme'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I would consider myself more of a big-picture thinker than detail-oriented',
    QuestionPreEntered:false,
    QuestionOptions:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
    QuestionPack: 'catme'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who is outgoing, sociable',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who tends to find fault with others',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who does a thorough job',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who is relaxed, handles stress well',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who has few artistic interests',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I would like to act as a leader',
    QuestionPreEntered:false,

    QuestionOptions:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
    QuestionPack: 'catme'
  },
  {
    QuestionType:'text',
    QuestionText:'Would you rather have unlimited bacon but no more games, or games (unlimited games) and no games? Answer honestly.',
    QuestionPreEntered:false,
    QuestionOptions:[],
    QuestionPack: 'icebreaker'
  },
]
export const bigfivequestions: Question[] = [
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who is reserved',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who is generally trusting',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who tends to be lazy',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who is relaxed, handles stress well',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who has few artistic interests',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who is outgoing, sociable',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who tends to find fault with others',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who does a thorough job',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who gets nervous easily',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I see myself as someone who has an active imagination',
    QuestionPreEntered:false,

    QuestionOptions:['Disagree strongly','Disagree a little','Neither agree nor disagree','Agree a little','Agree strongly'],
    QuestionPack: 'bigfive'
  }
];
export const catmequestions: Question[] = [
  {
    QuestionType:'multiple',
    QuestionText:'Gender',
    QuestionPreEntered:false,

    QuestionOptions:['Woman','Man','Transgender Woman','Transgender Man','Non-Binary','Agender/I don\'t with any gender', 'Gender not listed/prefer not to state'],
    QuestionPack: 'catme'
  },
  {
    QuestionType:'multiple',
    QuestionText:'Race',
    QuestionPreEntered:false,

    QuestionOptions:['American Indian/Alaska Native','Asian','Black','Native Hawaiian','Pacific Islanders','White', 'Decline to Respond'],
    QuestionPack: 'catme'
  },
  {
    QuestionType:'numeric',
    QuestionText:'GPA',
    QuestionPreEntered:true,

    QuestionOptions:[],
    QuestionPack: 'catme'
  },
  {
    QuestionType:'multiple',
    QuestionText:'Software skills',
    QuestionPreEntered:false,

    QuestionOptions:['Very Poor', 'Below Average', 'Average', 'Above Average', 'Excellent'],
    QuestionPack: 'catme'
  },
  {
    QuestionType:'multiple',
    QuestionText:'Writing skills',
    QuestionPreEntered:false,

    QuestionOptions:['Very Poor', 'Below Average', 'Average', 'Above Average', 'Excellent'],
    QuestionPack: 'catme'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I would like to act as a leader',
    QuestionPreEntered:false,

    QuestionOptions:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
    QuestionPack: 'catme'
  },
  {
    QuestionType:'multiple',
    QuestionText:'I would consider myself more of a big-picture thinker than detail-oriented',
    QuestionPreEntered:false,

    QuestionOptions:['Strongly Agree', 'Agree', 'Undecided', 'Disagree', 'Strongly Disagree'],
    QuestionPack: 'catme'
  },
  {
    QuestionType:'multiple',
    QuestionText:'Commitment level',
    QuestionPreEntered:false,

    QuestionOptions:['None', 'Low', 'Moderate', 'High'],
    QuestionPack: 'catme'
  },
];
export const icebreakerquestions: Question[] = [
  {
    QuestionType:'multiple',
    QuestionText:'Ask Jasmine',
    QuestionPreEntered:false,

    QuestionOptions:['Woman','Man','Transgender Woman','Transgender Man','Non-Binary','Agender/I don\'t with any gender', 'Gender not listed/prefer not to state'],
    QuestionPack: 'icebreaker'
  },
]
export const efforttextquestions: Question[] = [
  {
    QuestionType:'text',
    QuestionText:'Ask Jasmine',
    QuestionPreEntered:false,

    QuestionOptions:[],
    QuestionPack: 'custom'
  },
]

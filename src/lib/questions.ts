import { IQuestion, IResultsEntity, IUnknownObject } from '@interfaces/app';

const answerMapper: IUnknownObject = {
    True: true,
    False: false,
};

export const questionMapper = (questions: IResultsEntity): IQuestion => {
    let id = 0;

    return {
        id: id++,
        category: questions.category,
        questionName: questions.question,
        correctAnswer: answerMapper[questions.correct_answer],
    };
};

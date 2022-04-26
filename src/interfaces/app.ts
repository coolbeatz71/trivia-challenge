/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUnknownObject {
    [key: string]: any;
}

export interface IQuestions {
    response_code: number;
    results?: IResultsEntity[] | null;
}

export interface IResultsEntity {
    type: string;
    question: string;
    category: string;
    difficulty: string;
    correct_answer: string;
    incorrect_answers?: string[] | null;
}

export type IResultData = IResultsEntity[] | null | undefined;

import api from '.';
import { questionMapper } from '@lib/questions';
import { IQuestion } from '@interfaces/app';

const fetchQuestions = async (): Promise<IQuestion[]> => {
    const { data } = await api.get('api.php');
    return data.results.map(questionMapper);
};

export default fetchQuestions;

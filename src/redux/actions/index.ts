import { Dispatch } from 'redux';

const ExampleAction = () => {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch({
            type: 'example',
        });
    };
};

export default ExampleAction;

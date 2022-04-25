import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './../redux/';

export const useActions = (): unknown => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch);
};

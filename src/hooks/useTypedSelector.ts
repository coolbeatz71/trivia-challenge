import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { Rootstate } from '@redux/reducers';

export const useTypedSelector: TypedUseSelectorHook<Rootstate> = useSelector;

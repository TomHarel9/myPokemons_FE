import { useDispatch, useSelector } from 'react-redux';
import {changeIsLoading } from '../slices/appSlice';

export function useLoaderProps() {
  return useSelector((state: any) => state.isLoading.value);
}

export function useLoaderActions() {
  const dispatch = useDispatch();

  return {
    setIsLoading: (isLoading: boolean) => {
      dispatch(changeIsLoading(isLoading));
    },
  };
}

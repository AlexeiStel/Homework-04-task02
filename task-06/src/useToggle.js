import { useReducer, useCallback } from 'react';

export function useToggle(initialValues = [true, false]) {
  const toggleReducer = (state, action) => {
    if (action !== undefined) {
      return initialValues.includes(action) ? action : state;
    }

    const currentIndex = initialValues.indexOf(state);
    const nextIndex = (currentIndex + 1) % initialValues.length;
    return initialValues[nextIndex];
  };

  const [state, dispatch] = useReducer(toggleReducer, initialValues[0]);
  const toggle = useCallback((value) => dispatch(value), [dispatch]);

  return [state, toggle];
}
  
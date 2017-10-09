export const DUMMY_ACTION = 'DUMMY_ACTION';

export const dummyAction = product => ({
  type: DUMMY_ACTION,
  payload: {
    product,
  },
});

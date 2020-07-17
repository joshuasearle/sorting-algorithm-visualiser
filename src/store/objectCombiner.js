export const objectCombiner = (state, changedObject) => {
  return { ...state, ...changedObject };
};

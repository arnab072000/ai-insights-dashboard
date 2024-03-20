export const FETCH_AI_DATA = 'FETCH_AI_DATA';

export const fetchAIData = (data: any) => ({
  type: FETCH_AI_DATA,
  payload: data,
});

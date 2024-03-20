import aiData from '../ai-data.json'; 


export const fetchAIData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(aiData);
    }, 1000);
  });
};


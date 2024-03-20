
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAIData } from './redux/actions';
import { fetchAIData as fetchAIDataService } from './services/mockApi';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const aiData = useSelector((state: any) => state.aiData);

  useEffect(() => {
    fetchAIDataService().then((data) => {
      dispatch(fetchAIData(data));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <h1>AI Insights Dashboard</h1>
      {aiData && (
        <>
          <h2>Category Distribution</h2>
          <BarChart data={aiData.category_distribution} />
          <h2>Response Times</h2>
          <h3>Daily</h3>
          <LineChart data={aiData.response_times.day_wise} />
          <h3>Weekly</h3>
          <LineChart data={aiData.response_times.week_wise} />
        </>
      )}
    </div>
  );
};

export default App;






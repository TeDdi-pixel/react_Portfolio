import './scss/style.scss'
import {data} from './fakeData';
import NetflixPlan from './pages/NetflixPlan';
import { BrowserRouter } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import AppRouter from './Router/AppRouter/AppRouter';

const DataContext = createContext();

function App() {
  const [newData, setNewData] = useState(data);
  return (
    <BrowserRouter className="App">
      <DataContext.Provider value={newData}>
        <AppRouter/>
      </DataContext.Provider>
    </BrowserRouter>
  );
}
export { DataContext };
export default App;

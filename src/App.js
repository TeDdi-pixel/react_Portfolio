import './scss/style.scss'
import {data} from './fakeData';
import NetflixPlan from './pages/NetflixPlan';
import { BrowserRouter } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
const DataContext = createContext();

function App() {
  const [newData, setNewData] = useState(data);
  return (
    <BrowserRouter className="App">
      <DataContext.Provider value={newData}>
      <NetflixPlan />
      </DataContext.Provider>
    </BrowserRouter>
  );
}
export { DataContext };
export default App;

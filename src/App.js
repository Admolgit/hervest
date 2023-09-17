import { Routes, Route } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import Plans from './Pages/Plans';
import Accounts from './Pages/Accounts';
import Banks from './Pages/Banks';
import Dashboard from './Pages/Dashboard';
import Purse from './Pages/Purse';
import Support from './Pages/Support';
import Investment from './Pages/Investment';
import Portfolio from './Pages/Portfolio';
import Refferal from './Pages/Refferal';
import About from './Pages/About';
import PersonalSavings from './Pages/PersonalSavings';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/bank" element={<Banks />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/purse' element={<Purse />} />
          <Route path='/support' element={<Support />} />
          <Route path='/investment' element={<Investment />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/refferal' element={<Refferal />} />
          <Route path='/about' element={<About />} />
          <Route index path="/" element={<Plans />} />
          <Route path="/savings" element={<PersonalSavings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

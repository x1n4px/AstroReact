import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { BrowserRouter, Routes } from "react-router-dom";

import Layout from './pages/Layout'
import Home from './pages/Home';
import NoPage from './pages/NoPage'
import NuevaPagina from './pages/NuevaPagina';
import IndividualBolide from './pages/IndividualBolide'
import BarChartInfo from './pages/BarChartInfo';
import Station from './pages/Station'

export default function App() {

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/NuevaPagina" element={<NuevaPagina />} />
          <Route path="/bolide-graph" element={<BarChartInfo />} />
          <Route path="/bolide/:id" element={<IndividualBolide />} />
        <Route path="/station" element={<Station />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

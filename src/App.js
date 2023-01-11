import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { AspectScore } from './components/AspectScore/AspectScore';
import { Benchmark } from './components/Benchmark/Benchmark';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<AspectScore/>} />
          <Route path="/Home" element={<AspectScore/>} />
          <Route path="/Benchmark" element={<Benchmark/>} />
        </Routes>
      </BrowserRouter>
      {/* <AspectScore></AspectScore> */}
    </div>
  );
}

export default App;

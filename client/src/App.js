// import logo from './logo.svg';
import './App.css';

import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/All" element={<AllUsers/>} />

        <Route path="/Add" element={<AddUser/>} />

        <Route path="/edit/:id" element={<EditUser/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

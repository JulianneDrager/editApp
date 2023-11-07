import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from './Components/Screen/Template';
import Update from './Components/Screen/Update';
import Edit from './Components/Screen/Edit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Template />} /> */}
          <Route exact path="/" element={<Template />} />
          <Route exact path="/edit/:editId/:data" element={<Edit />} />
          <Route exact path="/update/:data" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import GetProposal from "./pages/Contact/GetProposal.jsx";
import Apply from "./pages/Contact/ApplyJob.jsx";
import Sell from './pages/Contact/SellProduct.jsx';
import Client from './pages/Contact/PreviousClient.jsx';
import Post from './components/Post.jsx';
import PostList from './components/PostList.jsx';




/* Styles and CSS */
import './styles/Global/global.scss';
import './pages/Home/Home.scss';
import './components/layout/layout.scss';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}
function MainRoutes() {

  

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/edit/:id" element ={<Post/>}/>
        <Route path="/create" element={<Post/>}/>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/get-proposal" element={<GetProposal />} />
        <Route path="/apply-job" element={<Apply />} />
        <Route path="/sell-product" element={<Sell />} />
        <Route path="/previous-client" element={<Client />} />
      </Routes>

    </div>
  );


}


export default App;

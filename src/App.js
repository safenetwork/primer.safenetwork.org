import React from 'react';
import ReactDOM from 'react-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Intro, Chap1, Chap2, Chap3 } from './pages';
import Chap4 from './pages/Chap4';
import Chap5 from './pages/Chap5';
import Chap6 from './pages/Chap6';
import Chap7 from './pages/Chap7';
import Chap8 from './pages/Chap8';
import Chap9 from './pages/Chap9';
import Chap10 from './pages/Chap10';
import Chap11 from './pages/Chap11';
import Chap12 from './pages/Chap12';
import Chap13 from './pages/Chap13';
import './App.css';
import Header from './Header';
import Topbar from './Topbar';



function App() {

    return (
     
        <div className="App">

        
          <Header />
          <Intro />
          <Topbar bgcol="#1f3a80" word="" />  
          <Chap1 />
          <Topbar bgcol="#1f3a70" word="" />  
          <Chap2 />
          <Topbar bgcol="#1f3a60" word="" />  
          <Chap3 />
          <Topbar bgcol="#1f3a50" word="" />          
         <Chap4 />
         <Topbar bgcol="#1f3a40" word="" />         
         <Chap5 />
         <Topbar bgcol="#1f3a30" word="" />
         <Chap6 />
         <Topbar bgcol="#1f3a20" word="" />
         <Chap7 />
         <Topbar bgcol="#1f3a10" word="" />
         <Chap8 />
         <Topbar bgcol="#1f3b90" word="" />
         <Chap9 />
         <Topbar bgcol="#1f3b80" word="" />
         <Chap10 />
         <Topbar bgcol="#1f3b70" word="" />
         <Chap11 />
         <Topbar bgcol="#1f3b60" word="" />
         <Chap12 />
         <Topbar bgcol="#1f3b50" word="" />
         <Chap13 />
    </div>
  );
}

export default App;

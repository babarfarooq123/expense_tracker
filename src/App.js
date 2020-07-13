import React, {useState} from 'react';
import './App.css';
import gtransect from './context';
import Add from './add';
import Viewdel from './viewDel';
import Header from './header';

function App() {
  let transection = useState([])
  return (
    <gtransect.Provider value={transection}>
      <div className="App">
        <Header />        
        <div className="rest">
          <Viewdel />
          <Add />
        </div>
        
      </div>
    </gtransect.Provider>
  );
}

export default App;

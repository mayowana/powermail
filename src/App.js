import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Composer from './components/Composer/Composer';
import Mailbar from './components/Mailbar/Mailbar';
import Mailbody from './components/Mailbody/Mailbody';
import Sidebar from './components/Sidebar/Sidebar';
import Backdrop from './components/Backdrop/Backdrop'
import { selectComposeMessage } from './features/mailSlice';

function App() {
  const composeMessage = useSelector(selectComposeMessage)

  return (
    <Router>
    <div className="App">
        <div className='mailbox'>
            <div className='sidebar'><Sidebar /></div>
            <div className='mailbar'><Mailbar /></div>
            <div className='mailbody'><Mailbody /></div>
            {composeMessage && <div className='composer'><Composer /> <Backdrop /></div>}
        </div>
    </div>
    </Router>
  );
}

export default App;

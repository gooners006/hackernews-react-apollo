import '../styles/App.css';
import { Route, Routes } from 'react-router-dom';

import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList />} />
          <Route path="/create" element={<CreateLink />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Navi from './layout/navi';
import Board from './page/board';
import Main from './page/main';
import Post from './page/post';
import Write from './page/write';
import './style/app.css';

function App() {
  return (
    <div className='background'>
      <Navi />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/board' element={<Board />} />
        <Route path='/post' element={<Post />} />
        <Route path='/write' element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;

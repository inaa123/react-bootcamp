
import './App.css';
import {Link, Route, BrowserRouter as Router,  Routes} from 'react-router-dom'; 
//BrowserRouter as Router: BrowserRoute의 기능을 Router가 해주기 위함.
import Home from './pages/Home';
import Page01 from './pages/Page01';
import Page02 from './pages/Page02';
import NotFound from './pages/NotFound';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';

function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            {/*Link 에선 경로만 설정하고 어느 페이지가 뜰지는 Routes안에서 설정한다. */}
            <Link to='/'>home</Link> {/* '/' = localhost:3000 */}
          </li>
          <li>
            <Link to='/page01'>page01</Link>
          </li>
          <li>
            <Link to='/page02'>page02</Link>
          </li>
          <li>
            <Link to='/itemList'>itemList</Link>
          </li>
        </ul>

        <Routes>
          {/*path와 Link의to 같은 경로. 설정한 경로로 연결되면 element= 해당 컴포넌트로 교환할 것*/}
          <Route path='/' element={<Home/>}/>
          <Route path='/page01' element={<Page01/>}/>
          <Route path='/page02' element={<Page02/>}/>
          <Route path='/itemList' element={<ItemList/>}/>
          <Route path='/items/:id' element={<ItemDetail />} /> 
          {/* 경로에 :이 들어가는 경우 동적인 값을 받아올 때 사용하는 매개변수다.  */}
          {/* : 없으면 그냥 id가 경로가 됨, :이 들어오면 동적인 경로 */}
          <Route path='*' element={<NotFound/>}></Route>
          {/* 여기서 *는 위에 지정한 페이지 제외한 다른 모든 경로를 의미한다. */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

/*
  -페이지 이동할 수 있는 link를 만든다. ex )fotter에서->header로->page01로 이동하기 위한 
  -a태그X 대신 <Link></Link>태그 사용(import 주의)
  -to='/' 어느 페이지로 이동해줄 지 설정, 뒤엔 domain이 기본으로 깔려 있음(poart 3000 )
  -Link태그에서 경로를 설정했으면, (경로가 뜨면) 어떤 페이지로 연결해줄지 <Routes>안에 작성한다.
*/

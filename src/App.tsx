import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

//components
import Header from './components/NavBar/NavBar';

//pages
import Loading from './Pages/Loading/Loading';
import Error from './Pages/Error/Error';
const Home = lazy(() => import('./Pages/Home/Home'));
const LogIn = lazy(() => import('./Pages/LogIn/LogIn'));
const SignUp = lazy(() => import('./Pages/SignUp/SignUp'));
const Chat = lazy(() => import('./Pages/Chat/Chat'));
const Upload = lazy(() => import('./Pages/Upload/Upload'));
const Settings = lazy(() => import('./Pages/Settings/Settings'));
const Comment = lazy(() => import('./Pages/Comment/Comment'));

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/logIn" element={<LogIn />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
            <Route path="/comment/:id" element={<Comment />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/upload" element={<Upload />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

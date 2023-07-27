import '../css/App.css';
import Header from "./Header"
import Main from "./Main"
import { Outlet} from 'react-router-dom';

function App() {
  return (
    <>
       <Header />
       <Outlet />
    </>
   
  );
}

export default App;

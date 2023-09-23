import { Outlet } from 'react-router-dom';
import Header from "./components/MyHeader";
import Footer from "./components/MyFooter";


function App() {
  return (
      <div className=''>
        <Header />
        <Outlet />
        <Footer />
      </div>
  );
}

export default App;
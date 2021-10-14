// containers
import { Navbar } from './containers/Navbar'
import { Content } from './containers/Content';
import { Sidebar } from './containers/Sidebar';

// components
import Bubbles from './components/Bubbles';

// styles
import './App.css';

function App() {
  return (
    <div className='App hero'>
      <Navbar />
      <Content />
      <Sidebar />
      <Bubbles />
    </div>
  );
}

export default App;

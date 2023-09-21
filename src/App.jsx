import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className='md:flex'>
      <Sidebar />
      <div className='flex-1'>
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

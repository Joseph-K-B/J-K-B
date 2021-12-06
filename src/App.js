import Header from '../src/components/Header/HeaderComponent';
import ThreeCanvas from '../src/components/threejs/ThreeCanvas';
import PortContainer from '../src/containers/PortContainer';
import ContactContainer from '../src/containers/ContactContainer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='bulk'>
      {/* <ThreeCanvas /> */}
      {/* <PortContainer /> */}
      <ContactContainer />
      </div>

    </>
  );
}

export default App;

import './App.css';
import Adress from './Component/Profile/Adress';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';


function App() {
  return (
    <div className="App">
      <div className="CardApp">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Adress></Adress>
      </div>

    </div>
     
  );
}

export default App;

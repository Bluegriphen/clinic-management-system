import { getDatabase, ref, set } from 'firebase/database';
import { app } from './firebase/config'; 

import './App.css';

const db = getDatabase(app); 

const App = () => {

  const putData = () => {
    set(ref(db, 'users/piyush'), {
      id: 1,
      name: "piyush",
      age: 21, 
    });
  };

  return (
    <div>
      <h1>Hello world..!</h1>
      <button onClick={putData}>Put data</button>
    </div>
  );
}

export default App;


/**import Receptionist from '../../Pages/Dashboard/Receptionist';

const Home = () => {
  return (
    <div className="home-container">
      <Receptionist/>
    </div>
  );
};

export default Home;
*/

 import Login from '../../components/login/Login';

     
const Home = ()=>{
  return(
    <div>
      <h1>Clinic Management System</h1>
      <p>Welcome! Please log in to continue.</p>
      <Login/>
    </div>
  );
}
export default Home;
      
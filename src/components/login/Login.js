import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../../firebase/config';

const auth = getAuth(app);
const firestore = getFirestore(app);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Try to find user in both 'doctors' and 'receptionists' collections
      const doctorRef = doc(firestore, 'doctors', user.uid);
      const doctorSnap = await getDoc(doctorRef);

      if (doctorSnap.exists()) {
        navigate('/Dashboard/Doctor');
        return;
      }

      const receptionistRef = doc(firestore, 'receptionists', user.uid);
      const receptionistSnap = await getDoc(receptionistRef);

      if (receptionistSnap.exists()) {
        navigate('/Dashboard/Receptionist');
        return;
      }

      alert('User role not found.');
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          className="form-control my-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-control my-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;

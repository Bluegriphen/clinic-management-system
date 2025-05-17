import React, { useState } from 'react';
import { app } from '../../firebase/config';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const auth = getAuth(app);
const firestore = getFirestore(app);

const SignUp = ()=>{
     const [role, setRole] = useState('doctor'); // default
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store in correct collection
      const collection = role === 'doctor' ? 'doctors' : 'receptionists';

      await setDoc(doc(firestore, collection, user.uid), {
        uid: user.uid,
        email,
        name,
        role,
      });

      alert(`${role} registered successfully!`);
    } catch (err) {
      alert(err.message);
    }
  };
    return(
        <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input className="form-control my-2" type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="form-control my-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="form-control my-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        
        <select className="form-select my-2" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="doctor">Doctor</option>
          <option value="receptionist">Receptionist</option>
        </select>

        <button type="submit" className="btn btn-success">Register</button>
      </form>
    </div>
    );
}
export default SignUp;
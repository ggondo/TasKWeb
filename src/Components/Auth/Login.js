import React, { useState} from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
//import '../../Styles/styles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const Login = (e) => {
       e.preventDefault();
       signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        console.log(userCredential)
        }).catch((error) => {
        console.log(error)
        })
    }

  return (
    <div className="sign-in-container">
        <form onSubmit={Login}>
            <h1>Bem-Vindo</h1>
               
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
               
               
                    <input type="password" 
                        placeholder="Senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                
                <button type="submit">Logar</button>
        </form>
    </div>
  
  );
};

export default Login;
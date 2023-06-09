import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const {signIn, signInWithGoogle} = useContext(AuthContext)
    console.log(signIn);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
        signIn(email, password)
        .then(result =>{
            const signedIn = result.user;
            console.log(signedIn);
            form.reset('');
        })
        .catch(error =>{
            console.error(error)
        })
    }

    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(result = ()=>{
            const loggedGoogle = result.user;
            console.log(loggedGoogle)
        })
        .catch(error=()=>{
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center py-4">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='../register' className="label-text-alt link ">New To here ? Please, Register</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-secondary">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary mt-4">Sign with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
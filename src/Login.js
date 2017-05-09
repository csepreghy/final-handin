import React, {Component} from 'react';

const Login = ({loginLoading}) => (
     <section className="login-page">
       <div className="login-container card card-3">
         <img src="/assets/google.png" alt="google logo"/>
         <button onClick={ loginLoading } className="waves-effect waves-light btn red darken-1">Sign up with Google</button>
         <span>Already have an account? <a href="#login">Log in</a></span>
       </div>
     </section>
);

export default Login;
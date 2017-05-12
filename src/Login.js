import React, {Component} from 'react';

const Login = ({loginLoading}) => (
     <section className="login-page content">
       <div className="login-container card card-3">
         <img src="/assets/google.png" alt="google logo"/>
         <button onClick={ loginLoading } className="waves-effect waves-light btn red">Sign in with Google</button>
       </div>
     </section>
);

export default Login;
import './login.css';
import Header from "../Components/Moleculas/Header";
import CardLogin from "../Components/Moleculas/CardLogin/";

function Login() {
  return (
        <section className='container-login'>
        <Header/>
            <div className='card-login'>
                <CardLogin/>
            </div>
        </section>
  );
};

export default Login;

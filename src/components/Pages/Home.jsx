import '../../assets/home.css'
import WelcomeLogo from '../../assets/img/Alianza_Rebelde.webp';
const Home = () => {

return(
    <div className="welc-container">
        <img src={WelcomeLogo} alt="" />
        <h1>Bienvenidos!!!</h1>
    </div>
)

}

export default Home
import { Link } from "react-router-dom"
import "./LoginPage.css"
function LoginPage() {
    return (
        <div className="Login">
            <div className="facebook">
                <div className="facebooktext">
                    facebook
                </div>
                <div className="title">
                    Facebook helps you connect and share<br />
                    with the people in your life.
                </div>
            </div>
            <div className="LoginContainer">
                <div className="LoginDetails">
                    <input type="email" placeholder="Email address or phone number" />
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <Link to="/HeaderArea">
                        <button className="btn">
                            Log in
                        </button>
                    </Link>
                </div>
                <div className="forget">
                    <a href="forget">Forgotten Password?</a>
                    <br />
                    <button className="btns">
                        Create New Account
                    </button>
                    <br />
                    <br />
                </div>
                <div className="page">
                    <a href="createpage">
                        <strong>
                            Create a Page
                        </strong>
                    </a> for a celebrity, brand or business.
                </div>
            </div>

        </div>
    )
}
export default LoginPage

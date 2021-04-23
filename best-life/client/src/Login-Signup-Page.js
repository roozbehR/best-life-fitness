import React from "react";
import LoginForm from './components/LoginForm/loginform';
import SignUpForm from './components/SignUpForm/signup';


class LoginSignupPage extends  React.Component {
    state = {
        isLogginActive:true
    }

    toggleLoginStatus = () => {
        this.setState({isLogginActive: !this.state.isLogginActive})
    }

    render() {
        return(
            <div>
                { this.state.isLogginActive && <LoginForm changeLoginStatus={this.toggleLoginStatus} /> }
                {!this.state.isLogginActive && <SignUpForm changeLoginStatus={this.toggleLoginStatus} />}
            </div>
    );
        }
}
export default LoginSignupPage;
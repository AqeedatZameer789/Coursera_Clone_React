import React, { Component } from "react";
import { PostUser ,GetData} from "./RESTAPICALLER";
import "./SignUp.css";
class Userdisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      new_user1: "",
      new_email: "",
      new_pass: "",
    };
  }
  render() 
  {
    return (
      <div>
        <div>
          <ul>
            {this.state.users.map((user) => {
              
            })}
          </ul>
        </div>
        <div>
          {" "}
            <div className="main_div">
            <h1 className="main_heading">Sign up</h1>
            <p className="para">Learn on your own time from top universities and businesses.</p>
         
          <form
            onSubmit={(event) => {
              console.log(this.state.new_user1);
              console.log(this.state.new_email);
              console.log(this.state.new_pass);
              console.log("Form's on Submit Called");
              event.preventDefault();
              PostUser({
                name: this.state.new_user1,
                email: this.state.new_email,
                password: this.state.new_pass,
              }).then((response) => {
                console.log(response.data);
              });
            }}>
            <label className="labels" for="fname">FULL NAME</label><br/><br/>
            <input 
              className="inputs" 
              type="input"  
              placeholder="Enter Your Full Name"
              value={this.state.new_user1}
              
              onChange={(event) => {
              this.setState({ new_user1: event.target.value });
              }}>
            </input><br/>

            
            <label className="labels" for="lname">EMAIL</label><br/><br/>
            <input 
              className="inputs" 
              type="email"  
              placeholder="Name@email.com"
              value={this.state.new_email}
              onChange={(event) => {
              this.setState({ new_email: event.target.value });}}>
            </input><br/>
            

            <label className="labels" for="lname"> PASSWORD</label><br/><br/>
            <input 
              className="inputs" 
              type="password"  
              placeholder="Create Password"
              value={this.state.new_pass}
              onChange={(event) => {
              this.setState({ new_pass: event.target.value }); }}>
            </input><br/>

            <p className="para_pass_desc">Between 8 and 72 characters</p>
            <button 
            onClick={()=>{
              this.message();
            }}
                type="submit" value="Submit_User"
                className="btn1">Join For Free
            </button>
          </form>
              <div className="response">
              <div className="inerhr"><hr/></div>
              <div inerORhr><p>or</p></div>
              <div className="inerhr"><hr/></div>
              </div>
              <button className="btn2"><img alt="Not Found" className="img_icon" src="google.png"></img>Continue with Google</button>
              <button className="btn2"><img alt="Not Found"  className="img_icon" src="facebook1.png"></img>Continue with Facebook</button>
              <div className="div_bottom">
              <div className="inner1"><p>Already on Coursera?</p></div>
              <div className="inner2"><button className="a_style" >Log in</button></div></div>
              <hr className="hr1"/><br/>
              <button className="a_style2" href="">Sign up with your organization</button>
              
              <p className="last_para">I accept Coursera's 
              Terms of Use and Privacy Notice. 
              Having trouble logging in? Learner help center .</p>
             <p className="last_para">  This site is protected by reCAPTCHA Enterprise and the Google  Privacy Policy and 
              Terms of Service apply.</p> 
            
              </div>
              </div>
              </div>
              );
              }
  componentDidMount() {
    console.log("Users_Display Mounted");
    this.FetchUsers();
  }
  FetchUsers() {
    GetData().then((response) => {
      console.log(response.data);
      this.setState({ users: response.data });
    });
    return [];
  }
  message(){
    
    alert("Successfully Registered");
  }
}
export default Userdisplay;

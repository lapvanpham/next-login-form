import formStyles from "../styles/Login.module.css"
import Image from "next/dist/client/image";

export default function Login() {
  return (
    <form className={formStyles.blushWave}>
      <div className="imgcontainer">
        <Image width='100px' height='100px' src="/public/Red Simple Santa Claus Greeting Christmas Instagram Post.jpg" alt="Avatar" className="avatar" />
      </div>
      <br/>
      <div className="container">
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <br />
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <br />
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
        </label>
      </div>
      <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  );
}

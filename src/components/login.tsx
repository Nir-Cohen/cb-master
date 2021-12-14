import "./login.less";
import background from "../images/transBack.png";
import logo from "../images/logo.png";
import InputBase from '@material-ui/core/InputBase';

const Login = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img style={{ width: "9rem",  marginTop: "-1rem", }} src={logo} />
      <div style={{ fontSize: "2.5rem", color: "#FF42A1" }}>CB MASTER</div>
      <div
        style={{
          marginTop: "0.6rem",
          border: "1px solid #FF42A1",
          width: "18rem",
          height: "2.5rem",
          borderRadius: "2rem",
          color: "black",
        }}
      >
        <InputBase placeholder="User Name" style={{ marginLeft: "1.8rem", marginTop: "0.4rem" }}/>
      </div>
      <div
        style={{
          marginTop: "1rem",
          border: "1px solid #FF42A1",
          width: "18rem",
          height: "2.5rem",
          borderRadius: "2rem",
          color: "black",
        }}
      >
        <InputBase type="password" placeholder="Password" style={{ marginLeft: "1.8rem", marginTop: "0.4rem" }}/>
      </div>
      <div
        style={{
          marginTop: "2rem",
          border: "1px solid #FF42A1",
          width: "18rem",
          height: "2.5rem",
          borderRadius: "2rem",
          color: "black",
          backgroundColor: "#FF42A1"
        }}
      >
        <div onClick={()=> window.location.href= '/home'} style={{ textAlign: "center", marginTop: "0.7rem" ,color: "white", cursor: "pointer", fontWeight: "800" }}>
        Play
        </div>
      </div>
    </div>
  </div>
);

export default Login;

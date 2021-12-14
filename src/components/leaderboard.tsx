import "./login.less";
import background from "../images/backleader.png";
import logo from "../images/logo.png";
import InputBase from "@material-ui/core/InputBase";

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
    <div>Best 2800</div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "flex-end",
        marginRight: "1.5rem",
      }}
    >
      <div style={{ marginRight: "10rem", marginTop: "5rem" }}>LeaderBoard</div>
      <div
        style={{
          marginTop: "2rem",
          border: "1px solid #FF42A1",
          width: "16rem",
          height: "2.5rem",
          borderRadius: "2rem",
          color: "black",
          backgroundColor: "#F886B6",
        }}
      >
        <div style={{position: "absolute", marginLeft: "-1.5rem", marginTop: "0.6rem"}}>1</div>
        <div
          onClick={() => (window.location.href = "/home")}
          style={{
            textAlign: "center",
            marginTop: "0.7rem",
            cursor: "pointer",
          }}
        >
         <div style={{ justifyContent: "space-around", display: "flex" }}>
            <span>Sara</span>
            <span>2000 points</span>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "1rem",
          border: "1px solid #FF42A1",
          width: "16rem",
          height: "2.5rem",
          borderRadius: "2rem",
          color: "black",
          backgroundColor: "#F886B6",
        }}
      >
        <div style={{position: "absolute", marginLeft: "-1.5rem", marginTop: "0.6rem"}}>2</div>
        <div
          onClick={() => (window.location.href = "/home")}
          style={{
            textAlign: "center",
            marginTop: "0.7rem",
            cursor: "pointer",
          }}
        >
         <div style={{ justifyContent: "space-around", display: "flex" }}>
            <span>You</span>
            <span>1500 points</span>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "1rem",
          border: "1px solid #FF42A1",
          width: "16rem",
          height: "2.5rem",
          borderRadius: "2rem",
          color: "black",
          backgroundColor: "#F886B6",
        }}
      >
        <div style={{position: "absolute", marginLeft: "-1.5rem", marginTop: "0.6rem"}}>3</div>
        <div
          onClick={() => (window.location.href = "/home")}
          style={{
            textAlign: "center",
            marginTop: "0.7rem",
            cursor: "pointer",
          }}
        >
          <div style={{ justifyContent: "space-around", display: "flex" }}>
            <span>Dan</span>
            <span>1200 points</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;

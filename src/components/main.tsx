import "./login.less";
import background from "../images/transBack.png";
import logo from "../images/logo.png";
import crown from "../images/crown.png";

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
      <div>
        <img style={{ width: "10rem", marginTop: "-1rem" }} src={logo} />
        <div style={{ position: "absolute", marginLeft: "22rem", display: "flex", marginTop: '-9rem', alignItems: "center" }}>
          <img src={crown} />
          <div style={{color: "#FF42A1", fontWeight: "700"}}>2800</div>
        </div>
      </div>
      <div
        style={{
          marginTop: "2rem",
          border: "1px solid #FF42A1",
          width: "18rem",
          height: "2.5rem",
          borderRadius: "2rem",
          color: "black",
          backgroundColor: "#FF42A1",
        }}
      >
        <div
          onClick={() => (window.location.href = "/home")}
          style={{
            textAlign: "center",
            marginTop: "0.7rem",
            color: "white",
            cursor: "pointer",
            fontWeight: "800"
          }}
        >
          Invite a friend
        </div>
      </div>
      <div
        style={{
          marginTop: "2rem",
          border: "1px solid #FF42A1",
          width: "18rem",
          height: "2.5rem",
          borderRadius: "2rem",
          color: "black",
          backgroundColor: "#FF42A1",
        }}
      >
        <div
          onClick={() => (window.location.href = "/game")}
          style={{
            textAlign: "center",
            marginTop: "0.7rem",
            color: "white",
            cursor: "pointer",
            fontWeight: "800"
          }}
        >
          Start Game
        </div>
      </div>
      <div
        style={{
          marginTop: "2rem",
          border: "1px solid #FF42A1",
          width: "18rem",
          height: "2.5rem",
          borderRadius: "2rem",
          color: "black",
          backgroundColor: "#FF42A1",
        }}
      >
        <div
          onClick={() => (window.location.href = "/leaderboard")}
          style={{
            textAlign: "center",
            marginTop: "0.7rem",
            color: "white",
            cursor: "pointer",
            fontWeight: "800"
          }}
        >
          Leaderboard
        </div>
      </div>
    </div>
  </div>
);

export default Login;

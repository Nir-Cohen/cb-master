import "./login.less";
import background from "../images/backleader.png";
import gamer1 from "../images/gam1.png";
import gamer2 from "../images/gamer2.png";
import gamer3 from "../images/gamer3.png";
import linkedin from "../images/linkedin.png";

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
        border: "3px solid #FF42A1",
        borderRadius: "9rem",
        width: "7rem",
        height: "7rem",
        position: "absolute",
        marginLeft: "1.8rem",
        marginTop: "4rem",
      }}
    >
      <img
        style={{
          width: "6rem",
          marginLeft: "0.5rem",
        }}
        src={gamer1}
      />
    </div>
    <div
      style={{
        border: "3px solid #FF42A1",
        borderRadius: "3rem",
        width: "6rem",
        height: "6rem",
        position: "absolute",
        marginLeft: "9rem",
        marginTop: "4rem",
        fontWeight: "700",
      }}
    >
      <div style={{ marginLeft: "2rem", marginTop: "1.5rem" }}>Best</div>
      <div style={{ marginLeft: "1.8rem", marginTop: "0.3rem" }}>2800</div>
    </div>
    <div
      style={{
        border: "3px solid #FF42A1",
        borderRadius: "6rem",
        width: "8rem",
        height: "8rem",
        position: "absolute",
        marginLeft: "13.4rem",
        marginTop: "8rem",
        fontWeight: "700",
      }}
    >
      <div style={{ marginLeft: "2.8rem", marginTop: "2.5rem" }}>Score</div>
      <div style={{ marginLeft: "2.8rem", marginTop: "0.3rem" }}>2800</div>
    </div>
    <div
      style={{
        border: "3px solid #FF42A1",
        borderRadius: "5rem",
        width: "7rem",
        height: "7rem",
        position: "absolute",
        marginLeft: "6.2rem",
        marginTop: "9.8rem",
        fontWeight: "700",
      }}
    >
      <div style={{ marginLeft: "2.6rem", marginTop: "2rem" }}>Rate</div>
      <div style={{ marginLeft: "2.9rem", marginTop: "0.3rem" }}>2/3</div>
    </div>
    <img
      style={{
        width: "4rem",
        position: "absolute",
        marginLeft: "16.5rem",
        marginTop: "5.5rem",
      }}
      src={linkedin}
    />
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
        <div
          style={{
            position: "absolute",
            marginLeft: "-1.5rem",
            marginTop: "0.6rem",
          }}
        >
          1
        </div>
        <div
          onClick={() => (window.location.href = "/home")}
          style={{
            textAlign: "center",
            marginTop: "0.7rem",
            cursor: "pointer",
          }}
        >
          <div style={{ justifyContent: "space-around", display: "flex" }}>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  width: "2rem",
                  marginTop: "-0.4rem",
                  marginLeft: "-1rem",
                }}
                src={gamer2}
              />
              <span>Sara</span>
            </div>
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
        <div
          style={{
            position: "absolute",
            marginLeft: "-1.5rem",
            marginTop: "0.6rem",
          }}
        >
          2
        </div>
        <div
          onClick={() => (window.location.href = "/home")}
          style={{
            textAlign: "center",
            marginTop: "0.7rem",
            cursor: "pointer",
          }}
        >
          <div style={{ justifyContent: "space-around", display: "flex" }}>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  width: "2rem",
                  marginTop: "-0.4rem",
                  marginLeft: "-1rem",
                }}
                src={gamer1}
              />
              <span>You</span>
            </div>
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
        <div
          style={{
            position: "absolute",
            marginLeft: "-1.5rem",
            marginTop: "0.6rem",
          }}
        >
          3
        </div>
        <div
          onClick={() => (window.location.href = "/home")}
          style={{
            textAlign: "center",
            marginTop: "0.7rem",
            cursor: "pointer",
          }}
        >
          <div style={{ justifyContent: "space-around", display: "flex" }}>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  width: "2rem",
                  marginTop: "-0.4rem",
                  marginLeft: "-1rem",
                }}
                src={gamer3}
              />
              <span>Dan</span>
            </div>
            <span>1200 points</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;

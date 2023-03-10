const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px black solid",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "0",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "80px",
      right: "-35px",
      transform: "rotate(45deg)",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "80px",
      right: "35px",
      transform: "rotate(-45deg)",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-25px",
      transform: "rotate(-30deg)",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "25px",
      transform: "rotate(30deg)",
    }}
  />
);

export function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
          top: "0",
          right: "0",
          position: "absolute",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}

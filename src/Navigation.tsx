import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>TS Workshop</h1>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "16px" }}
      >
        <Link to="/">Home</Link>
        <Link to="/js-to-ts">01: Js to Ts</Link>
        <Link to="/mutually-exclusive">02: Mutually exclusive</Link>
        <Link to="/generics">03: Generics</Link>
        <Link to="/pizza-shop">04: Pizza shop</Link>

      </div>
    </div>
  );
};

import React from "react";
import Navigation from "./Navigation";
export default function Layout(props) {
  return (
    <React.Fragment>
      <Navigation />
      <main>{props.children}</main>
    </React.Fragment>
  );
}

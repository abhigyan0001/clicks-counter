import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="page-footer font-small teal pt-1" style={{ backgroundColor: "#36393F", color: "white", position: "absolute", bottom: "0", width: "100%"}}>
        <div className="footer-copyright text-center py-2" style={{backgroundColor:"#324191"}}>
          © 2021 Copyright: Clicks Counter
        </div>
      </footer>
    </>
  );
}

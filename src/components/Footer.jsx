import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="page-footer font-small teal pt-4" style={{ backgroundColor: "#3F51B5", color: "white", position: "absolute", bottom: "0", width: "100%"}}>
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3" style={{marginLeft:"20em"}}>
              <h5 className="text-uppercase">Clicks Counter</h5>
              <p>
                Get to know about your speed of clicking!
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />
          </div>
        </div>
        <div className="footer-copyright text-center py-3" style={{backgroundColor:"#324191"}}>
          © 2021 Copyright: Clicks Counter
        </div>
      </footer>
    </>
  );
}

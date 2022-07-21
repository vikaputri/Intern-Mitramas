import React from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import About from "../../components/About";
import Lokasi from "../../components/Lokasi";
import Aktivity from "../../components/Aktivity";
import AkunBank from "../../components/AkunBank";
import Relasi from "../../components/Relasi";
import "./index.css";

function Dashboard() {
  return (
    <div className="mb-3">
      <div className="row">
        <div className="col-sm-1 padding0">
          <Sidebar />
        </div>
        <div className="col-sm-11 hijau">
          <Topbar />
            <div className="row margin-top margin-left">
              <About/>
              <div className="col-sm-9">
                <Lokasi/>
                <div className="row">
                  <div className="col-sm-12 margin-top">
                    <div className="card-deck">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-deck">
                            <div clasName="row">
                              <AkunBank/>
                              <Relasi/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Aktivity/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
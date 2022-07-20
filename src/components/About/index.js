import React from "react";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PublicIcon from '@mui/icons-material/Public';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

function About() {
  return (
          <div class="col-sm-3">
            <div class="card">
              <div class="card-header">
                <img class="card-img" alt="User image" 
                  src="https://d17ivq9b7rppb3.cloudfront.net/original/jobs/android_programmer_170519092228.png"/>
              </div>
              <div class="card-body margin-top40 text-center">
                <h5 class="card-title">Mitramas Infosys Global</h5>
                <p>Layanan IT</p>
                <p class="text-success">
                  <ModeEditOutlineOutlinedIcon className="sidebarIcon" />
                  Sunting Profil
                </p>
              </div>

              <div class="card-body">
                <p class="text-muted">Status Perusahaan</p>
                <div class="text-success">
                  <span class="float-left">Aktif</span>
                  <ToggleOnIcon className="sidebarIcon float-right" />                   
                </div>
                <br/><br/>
                <p class="text-muted">Singkatan</p>
                <p>MIG</p>
                <p class="text-muted">Alamat Perusahaan</p>
                <p>Jl. Tebet Raya No. 42, Jakarta Selatan</p>
                <p class="text-muted">Penanggung Jawab (PIC)</p>
                <p>John Doe</p>
                <p class="text-muted">Tanggal PKP</p>
                <p>03 Maret 2021</p>
                <p class="text-muted">E-mail</p>
                <p class="text-success stretched-link">
                  <EmailOutlinedIcon className="sidebarIcon" /> &nbsp;
                  <a href="mig@mitrasolusi.group">mig@mitrasolusi.group</a>
                </p>
                <p class="text-muted">No. Telp</p>
                <p class="text-success stretched-link">
                  <PhoneIcon className="sidebarIcon" /> &nbsp;
                  021-5678-1234
                </p>
                <p class="text-muted">Situs Web</p>
                <a href="http://mitramas.com/" class="text-success stretched-link text-decoration-none">
                  <PublicIcon className="sidebarIcon" /> &nbsp;
                  mitramas.com
                </a>
            </div>
          </div>
        </div>    
  );
}

export default About;
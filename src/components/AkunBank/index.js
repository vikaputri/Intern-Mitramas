import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function AkunBank() {
  return (
    <div class="card">
      <div class="margin-top margin-left20 margin-right20">
        <span class="float-left font-weight-bold">Akun Bank</span>
        <span class="float-right">
          <button type="button" class="btn btn-success">Tambah Akun Bank</button>
        </span>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-4">
            <img src="https://www.freeiconspng.com/uploads/visa-icon-13.png" width="100"/>
          </div>
          <div class="col-sm-5">
            <p class="font-weight-bold size">Bank KB Bukopin</p>
            <span class="size">***0876 - Yusron Taufik</span>
            <p class="size">IDR</p>
          </div>
          <div class="col-sm-3">
            <EditIcon className="sidebarIcon float-left" />
            <DeleteIcon className="sidebarIcon float-right" />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <img src="https://www.freeiconspng.com/uploads/visa-icon-13.png" width="100"/>
          </div>
          <div class="col-sm-5">
            <p class="font-weight-bold size">Citibank, NA</p>
            <span class="size">***5525- Si Tampan</span>
            <p class="size">USD</p>
          </div>
          <div class="col-sm-3">
            <div class="row"></div>
            <EditIcon className="sidebarIcon float-left" />
            <DeleteIcon className="sidebarIcon float-right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AkunBank;
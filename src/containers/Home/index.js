import React, { useState, useEffect } from "react";
import { GroupOutlined, LocationCityOutlined, HomeOutlined } from "@material-ui/icons";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import Swal from 'sweetalert2';
import axios from 'axios';


function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const getApi = async () => {
      try {
        await axios
          .get('https://mitramas-test.herokuapp.com/customers', {
            headers: {
              Authorization: token,
            },
          })
          .then((res) => {
            setData(res.data.data);
            console.log('oke')
          });
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  let deleteUser = (id_user) => {
    axios.delete("https://mitramas-test.herokuapp.com/customers",{
      headers: {
        Authorization :token
      },
      data :{
        id: id_user
      }
    }).then((res)=> {
      Swal.fire({
        title: 'Account deleted.',
        text: 'deleted user successfully',
        icon: 'success',
        confirmButtonText: 'Back',
      });
    })
  }

  useEffect(() => {
    if(status === "Aktif"){
      setStatus(true)
    }else if(status === "Tidak Aktif"){
      setStatus(false)
    }
  }, [status])


  const filterActive = data.filter((data) => data.status === true);
  const filterInactive = data.filter((data) => data.status === false);

  return (
    <section class="py-5">
      <div class="container px-5">

        <div class="d-flex bd-highlight mb-3">
          <div class="me-auto bd-highlight">
            <form class="d-flex">
              <input class="form-control me-"  placeholder="Cari Nama" onChange={(event) => setSearch(event.target.value)}/>
            </form>
          </div>
          <div class="p-2 bd-highlight">
            <select class="form-select" onChange={(event) => setStatus(event.target.value)}>
              <option selected>Status User</option>
              <option value="1">Activate</option>
              <option value="2">Non Activate</option>
            </select>
          </div>
          <div class="p-2 bd-highlight">
            <button type="button" class="btn btn-primary">Create</button>
          </div>
        </div>

        <div className="row">
          <div class="col">
            <div class="card text-dark bg-light mb-3">
              <div class="card-body row">
                <div class="col-2">
                  <GroupOutlined className="sidebarIcon" />
                </div>
                <div class="col">
                  <span>Customers Total</span>
                  <p>{data.length}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card text-dark bg-light mb-3">
              <div class="card-body row">
                <div class="col-2">
                  <GroupOutlined className="sidebarIcon" />
                </div>
                <div class="col">
                  <span>Customers Activate</span>
                  <p>{filterActive.length}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card text-dark bg-light mb-3">
              <div class="card-body row">
                <div class="col-2">
                  <GroupOutlined className="sidebarIcon" />
                </div>
                <div class="col">
                  <span>Customers Inactive</span>
                  <p>{filterInactive.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {search ? data.filter((v) => v.name === search ).sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)).map((v) => (
          <div class="col-4">
            <div class="card text-dark bg-light mb-3">
              <div class="card-body">

                <div class="d-flex bd-highlight mb-3">
                  <div class="me-auto p-2 bd-highlight">{v.name}</div>
                  <div class="p-2 bd-highlight">
                    <EditIcon className="sidebarIcon" />
                  </div>
                  <div class="p-2 bd-highlight">
                    <DeleteIcon className="sidebarIcon" onClick={() => deleteUser(v.id)}/>
                  </div>
                </div>

                <div class="px-2"> 
                  {v.status ? 
                    (<button type="button" class="btn btn-primary mb-3">Aktif</button>) : 
                    (<button type="button" class="btn btn-danger mb-3">Tidak Aktif</button>)
                  }

                  <div class="mb-3">
                    <HomeOutlined  className="sidebarIcon" /> &nbsp; {v.address}
                  </div>
                  <div class="mb-3">
                    <PublicIcon className="sidebarIcon" /> &nbsp;{v.country}
                  </div>
                  <div class="mb-3">
                    <PhoneIcon className="sidebarIcon" /> &nbsp;{v.phone_number}
                  </div>
                  <div class="mb-3">
                    <LocationCityOutlined className="sidebarIcon" /> &nbsp;{v.job_title}
                  </div>                
                  
                </div>

              </div>
            </div>
          </div>


          )): status !== undefined? data.filter((v)=> v.status === status).sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)).map((v) => (
          <div class="col-4">
            <div class="card text-dark bg-light mb-3">
              <div class="card-body">

                <div class="d-flex bd-highlight mb-3">
                  <div class="me-auto p-2 bd-highlight">{v.name}</div>
                  <div class="p-2 bd-highlight">
                    <EditIcon className="sidebarIcon" />
                  </div>
                  <div class="p-2 bd-highlight">
                    <DeleteIcon className="sidebarIcon" onClick={() => deleteUser(v.id)}/>
                  </div>
                </div>

                <div class="px-2"> 
                  {v.status ? 
                    (<button type="button" class="btn btn-primary mb-3">Aktif</button>) : 
                    (<button type="button" class="btn btn-danger mb-3">Tidak Aktif</button>)
                  }

                  <div class="mb-3">
                    <HomeOutlined  className="sidebarIcon" /> &nbsp; {v.address}
                  </div>
                  <div class="mb-3">
                    <PublicIcon className="sidebarIcon" /> &nbsp;{v.country}
                  </div>
                  <div class="mb-3">
                    <PhoneIcon className="sidebarIcon" /> &nbsp;{v.phone_number}
                  </div>
                  <div class="mb-3">
                    <LocationCityOutlined className="sidebarIcon" /> &nbsp;{v.job_title}
                  </div>                
                  
                </div>

              </div>
            </div>
          </div>


          )) : data.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)).map((v) => (
          <div class="col-4">
            <div class="card text-dark bg-light mb-3">
              <div class="card-body">

                <div class="d-flex bd-highlight mb-3">
                  <div class="me-auto p-2 bd-highlight">{v.name}</div>
                  <div class="p-2 bd-highlight">
                    <EditIcon className="sidebarIcon" />
                  </div>
                  <div class="p-2 bd-highlight">
                    <DeleteIcon className="sidebarIcon" onClick={() => deleteUser(v.id)}/>
                  </div>
                </div>

                <div class="px-2"> 
                  {v.status ? 
                    (<button type="button" class="btn btn-primary mb-3">Aktif</button>) : 
                    (<button type="button" class="btn btn-danger mb-3">Tidak Aktif</button>)
                  }

                  <div class="mb-3">
                    <HomeOutlined  className="sidebarIcon" /> &nbsp; {v.address}
                  </div>
                  <div class="mb-3">
                    <PublicIcon className="sidebarIcon" /> &nbsp;{v.country}
                  </div>
                  <div class="mb-3">
                    <PhoneIcon className="sidebarIcon" /> &nbsp;{v.phone_number}
                  </div>
                  <div class="mb-3">
                    <LocationCityOutlined className="sidebarIcon" /> &nbsp;{v.job_title}
                  </div>                
                  
                </div>

              </div>
            </div>
          </div>

          ))}


        </div>

      </div>
    </section>
  );
}

export default Home;
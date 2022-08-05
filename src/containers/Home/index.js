import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { GroupOutlined, LocationCityOutlined, HomeOutlined } from "@material-ui/icons";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import Swal from 'sweetalert2';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [sortKey, setSortKey] = useState(false);
  const [result, setResult] = useState([]);
  const token = localStorage.getItem('token');
  const history = useHistory();

  const handleSearch = (event) => {
    const eventValue = event.target.value;
    setSearchKey(eventValue);
    search();
  };

  const handleSort = (event) => {
    const eventValue = event.target.value;
    if (eventValue === 'All') {
      setResult(data);
    } else if (eventValue === 'Aktif') {
      setSortKey(false);
    } else if (eventValue === 'Tidak Aktif') {
      setSortKey(true);
    }
    sort();
  };

  const search = async () => {
    console.log(searchKey);
    if (searchKey === '') {
      setResult(data);
    }

    const res = data.filter((data) => {
      return data.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    setResult(res);
  };

  const sort = async () => {
    const res = data.filter((data) => {
      return data.status === sortKey;
    });
    setResult(res);
  };

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
            setResult(res.data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  const deleteUser = (id_user) => {
    axios.delete("https://mitramas-test.herokuapp.com/customers",{
      headers: {
        Authorization :token
      },
      data :{
        id: id_user
      }
    }).then((res)=> {
      Swal.fire({
        title: 'Success',
        text: 'Data Deleted Successfully',
        icon: 'success',
        confirmButtonText: 'Back',
      });
      history.push('/home');
    })
  }

  const editUser = (id_user) => {
    history.push(`/edit/${id_user}`);
  };

  const filterActive = data.filter((data) => data.status === true);
  const filterInactive = data.filter((data) => data.status === false);

  return (
    <section className="py-5">
      <div className="container px-5">

        <div className="d-flex bd-highlight mb-3">
          <div className="me-auto bd-highlight">
            <form className="d-flex">
              <input className="form-control"
                placeholder="Cari Nama" 
                value={searchKey}
                onChange={handleSearch}/>
            </form>
          </div>
          <div className="p-2 bd-highlight">
            <select className="form-select" onChange={handleSort}>
              <option selected value='All'>Status User</option>
              <option value="Aktif">Activate</option>
              <option value="Tidak Aktif">Non Activate</option>
            </select>
          </div>
          <div className="p-2 bd-highlight">
            <button 
              type="button"
              className="btn btn-primary" 
              onClick={() => history.push('/create')}>Create</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card text-dark bg-light mb-3">
              <div className="card-body row">
                <div className="col-2">
                  <GroupOutlined className="sidebarIcon" />
                </div>
                <div className="col">
                  <span>Customers Total</span>
                  <p>{data.length}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-dark bg-light mb-3">
              <div className="card-body row">
                <div className="col-2">
                  <GroupOutlined className="sidebarIcon" />
                </div>
                <div className="col">
                  <span>Customers Activate</span>
                  <p>{filterActive.length}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-dark bg-light mb-3">
              <div className="card-body row">
                <div className="col-2">
                  <GroupOutlined className="sidebarIcon" />
                </div>
                <div className="col">
                  <span>Customers Inactive</span>
                  <p>{filterInactive.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
            {result.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)).map((v) => {
              return (
                <div className="col-4">
                    <div className="card text-dark bg-light mb-3">
                    <div className="card-body">
        
                        <div className="d-flex bd-highlight mb-3">
                        <div className="me-auto p-2 bd-highlight">{v.name}</div>
                        <div className="p-2 bd-highlight">
                            <EditIcon className="sidebarIcon" 
                            onClick={() => editUser(v.id)}/>
                        </div>
                        <div className="p-2 bd-highlight">
                            <DeleteIcon className="sidebarIcon" 
                            onClick={() => deleteUser(v.id)}/>
                        </div>
                        </div>
        
                        <div className="px-2"> 
                        {v.status ? 
                            (<button type="button" className="btn btn-primary mb-3">Activate</button>) : 
                            (<button type="button" className="btn btn-danger mb-3">Non Activate</button>)
                        }
        
                        <div className="mb-3">
                            <HomeOutlined  className="sidebarIcon" /> &nbsp; {v.address}
                        </div>
                        <div className="mb-3">
                            <PublicIcon className="sidebarIcon" /> &nbsp;{v.country}
                        </div>
                        <div className="mb-3">
                            <PhoneIcon className="sidebarIcon" /> &nbsp;{v.phone_number}
                        </div>
                        <div className="mb-3">
                            <LocationCityOutlined className="sidebarIcon" /> &nbsp;{v.job_title}
                        </div>                
                        
                        </div>
        
                    </div>
                    </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Home;
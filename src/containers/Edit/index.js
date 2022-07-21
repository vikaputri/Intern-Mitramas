import {useState,useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

function Edit() {
    const [dataUser, setDataUser] = useState([]);
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [country, setCountry] = useState();
    const [status, setStatus] = useState();
    const [job, setJob] = useState();

    const { idUser } = useParams();
    const token = localStorage.getItem("token");
    const history = useHistory(); 

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
                const dataFilter = res.data.data.filter((v) => v.id === Number(idUser));
                setDataUser(dataFilter);
              });
          } catch (error) {
            console.log(error);
          }
        };
        getApi();
      }, []);

    
    useEffect(() => {
       setName(dataUser.map((v) => v.name).toString())
    }, [dataUser.map((v) => v.name).toString()])

    useEffect(() => {
        setAddress(dataUser.map((v) => v.address).toString())
     }, [dataUser.map((v) => v.address).toString()])

     useEffect(() => {
        setCountry(dataUser.map((v) => v.country).toString())
     }, [dataUser.map((v) => v.country).toString()])

     useEffect(() => {
        setPhoneNumber(dataUser.map((v) => v.phone_number).toString())
     }, [dataUser.map((v) => v.phone_number).toString()])

     useEffect(() => {
        setJob(dataUser.map((v) => v.job_title).toString())
     }, [dataUser.map((v) => v.job_title).toString()])

     useEffect(() => {
        setStatus(dataUser.map((v) => v.status ? "Aktif" : "Tidak Aktif").toString())
     }, [dataUser.map((v) => v.status).toString()])

    const userEdit = [];
    userEdit.push({
        name : name,
        address : address,
        country : country,
        phone_number :phoneNumber,
        job_title : job
    })

    const filterStatus = () => {
        if (status.toString() === "Aktif") {
          return true;
        } else if (status.toString() === "Tidak Aktif") {
          return false;
        }
      }

    const handleSubmit = () => {
        axios.put("https://mitramas-test.herokuapp.com/customers", {
            id : idUser,
            name : name,
            address : address,
            country: country,
            phone_number : phoneNumber,
            job_title : job,
            status : filterStatus()
        }, {
            headers : {
                Authorization : token
            }
        })
        .then((res) => {
            Swal.fire(
              'Success!',
              'Successfully Changed Data',
              'success'
            );
            history.push('/home');
        })
        .catch((error) => {
            Swal.fire({
              title: 'Failed!',
              text: 'Failed to Change Data',
              icon: 'error',
              confirmButtonText: 'Try Again',
            });
            console.log(error)
        });
    }

    const option = ["Aktif", "Tidak Aktif"];

    return(
     <section className="py-5">
        <div className=" px-5">
            <form>
                <h2 className="text-center mb-5">Edit Data</h2> 
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input className="form-control" 
                            id="name" 
                            type="text" 
                            value={name} 
                            onChange={(event)=>setName(event.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input className="form-control" 
                            id="address"
                            type="text" 
                            value={address} 
                            onChange={(event)=>setAddress(event.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                            id="country"
                            type="text" 
                            value={country} 
                            onChange={(event)=>setCountry(event.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Phone Number</label>
                    <div className="col-sm-10">
                        <input className="form-control" 
                            id="phone-number"
                            type="number" 
                            value={phoneNumber} 
                            onChange={(event)=>setPhoneNumber(event.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Job</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                            id="phone-number"
                            type="text"
                            value={job} 
                            onChange={(event)=>setJob(event.target.value)}/>
                    </div>
                </div>
                <div className="mb-5 row">
                    <label className="col-sm-2 col-form-label">Status</label>
                    <div className="col-sm-10">
                        <select className="form-select"
                            placeholder="Select Option" 
                            onChange={(event) => setStatus(event.target.value)}
                            value={status}>
                            {option.map((v)=> <option>{v}</option>)}
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <button type="button" 
                        className="btn btn-primary"
                        onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </form>
        </div>
     </section>
    );
};

export default Edit;
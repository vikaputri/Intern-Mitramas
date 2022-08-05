import {useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';

function Create() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [job, setJob] = useState();
  const [status, setStatus] = useState();
  const history = useHistory();
  const token = localStorage.getItem("token");

  const filterStatus = () => {
    console.log(status)
    if (status === "Aktif") {
      return true;
    } else if (status === "Tidak Aktif") {
      return false;
    }
  }
  
  const handleSubmit = () => {
    axios
      .post(
        "https://mitramas-test.herokuapp.com/customers",
        {
          name: name,
          address: address,
          country: country,
          phone_number: phoneNumber,
          job_title: job,
          status: filterStatus(),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        Swal.fire(
          'Success!',
          'Successfully Saved Data',
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
      });
  };

  const option = ["Status User","Aktif", "Tidak Aktif"];

  return (
     <section className="py-5">
        <div className=" px-5">
            <form>
                <h2 className="text-center mb-5">Add Data</h2> 
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input className="form-control" 
                            id="name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input className="form-control" 
                            id="address"
                            type="text"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Country</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                          id="country"
                          type="text"
                          value={country}
                          onChange={(event) => setCountry(event.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Phone Number</label>
                    <div className="col-sm-10">
                        <input className="form-control" 
                          id="phone-number"
                          type="number"
                          value={phoneNumber}
                          onChange={(event) => setPhoneNumber(event.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Job</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                          id="job-title"
                          type="text"
                          value={job}
                          onChange={(event) => setJob(event.target.value)}/>
                    </div>
                </div>
                <div className="mb-5 row">
                    <label className="col-sm-2 col-form-label">Status</label>
                    <div className="col-sm-10">
                        <select className="form-select"
                          onChange={(event) => setStatus(event.target.value)}
                        >
                          {option.map((v) => (
                            <option>{v}</option>
                          ))}
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
}

export default Create;
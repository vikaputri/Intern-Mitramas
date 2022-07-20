import "./topbar.css"
import { NotificationsNone, Search } from "@material-ui/icons";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

function Topbar() {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('token');
    Swal.fire('Success!', 'Success Logout!', 'success').then(
      history.push('/')
    );
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb hijau">
              <li class="breadcrumb-item active">Perusahaan</li>
              <li class="breadcrumb-item" aria-current="page">Mitramas Infosys Global</li>
            </ol>
          </nav>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
          </div>
          <div className="topbarIconContainer">
            <Search />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="topAvatar kiri" 
          />
          <span className="kiri">Joe Doe</span>
          <span onClick={handleLogout} className="kiri">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
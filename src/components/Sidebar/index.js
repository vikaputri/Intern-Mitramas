import "./sidebar.css";
import {
  AssignmentTurnedInOutlined,
  HomeOutlined,
  ApartmentOutlined,
  DeleteOutlined,
  GroupOutlined,
  LayersOutlined,
  ConfirmationNumberOutlined,
  LocationCityOutlined,
  PostAdd,
  AllOut,
  DeviceHubRounded
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import WaterDamageOutlinedIcon from '@mui/icons-material/WaterDamageOutlined';

function Sidebar() {
  return (
    <nav class="nav flex-column">
      <a class="nav-link add" href="#">
        <DeviceHubRounded className="sidebarIcon" />
      </a>
      <a class="nav-link" href="#">
        <WaterDamageOutlinedIcon className="sidebarIcon" />
      </a>
      <a class="nav-link" href="#">
        <ConfirmationNumberOutlined className="sidebarIcon" />
      </a>
      <a class="nav-link" href="#">
        <AssignmentTurnedInOutlined className="sidebarIcon" />
      </a>
      <a class="nav-link" href="#">
        <DeleteOutlined className="sidebarIcon" />
      </a>
      <a class="nav-link active" href="/">
        <LocationCityOutlined className="sidebarIcon" />
      </a>
      <a class="nav-link" href="#">
        <GroupOutlined className="sidebarIcon" />
      </a>
       <a class="nav-link" href="#">
        <LayersOutlined className="sidebarIcon" />
      </a>

      <a class="nav-link" href="#">
        <HomeOutlined className="sidebarIcon" />
      </a>
      <a class="nav-link" href="#">
        <ViewInArIcon className="sidebarIcon" />
      </a>
      <a class="nav-link" href="#">
        <AllOut className="sidebarIcon" />
      </a>
       <a class="nav-link add" href="#">
        <SavedSearchIcon className="sidebarIcon" />
      </a>
      <a class="nav-link" href="#">
        <PostAdd className="sidebarIcon" />
      </a>
    </nav>
  );
}

export default Sidebar;
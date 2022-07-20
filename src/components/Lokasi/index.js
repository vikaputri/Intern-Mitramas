import ShareIcon from '@mui/icons-material/Share';
import { LocationCityOutlined } from "@material-ui/icons";
import WaterDamageOutlinedIcon from '@mui/icons-material/WaterDamageOutlined';

function Lokasi() {
  return (
                <div class="row margin-left5">
                  <div class="card width">
                    <div class="margin-top margin-left20 margin-right20">
                      <span class="float-left">Lokasi</span>
                      <span class="float-right text-success"> Lihat Semua</span>
                    </div>
                    
                    <div class="card-deck padding white">
                      <div class="card hijautua">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-sm-6">
                              <LocationCityOutlined className="sidebarIcon" />
                            </div>
                            <div class="col-sm-6 text-right">
                              <span class="font-weight-bold">20</span>
                              <p class="size9">Induk</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card hijautua">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-sm-6">
                              <ShareIcon className="sidebarIcon" />
                            </div>
                            <div class="col-sm-6 text-right">
                              <span class="font-weight-bold">3</span>
                              <p class="size9">Sub Lokasi Level 1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card hijautua">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-sm-6">
                              <WaterDamageOutlinedIcon className="sidebarIcon" />
                            </div>
                            <div class="col-sm-6 text-right">
                              <span class="font-weight-bold">1</span>
                              <p class="size9">Sub Lokasi Level 2</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
  );
}

export default Lokasi;
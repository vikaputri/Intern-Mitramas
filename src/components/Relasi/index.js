import ShareIcon from '@mui/icons-material/Share';

function Relasi() {
  return (
          <div class="card margin-top">
            <div class="margin-top margin-left20 margin-right20 mb-3">
              <span class="float-left font-weight-bold">Relasi</span>
              <span class="float-right text-success"> Lihat Semua</span>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-2">
                  <ShareIcon className="sidebarIcon" />
                </div>
                <div class="col">
                  <span class="font-weight-bold">20</span>
                  <p class="size9">Memiliki</p>
                </div>
              </div>
              <div class="row margin5">
                <div class="col-sm-2">
                  <ShareIcon className="sidebarIcon" />
                </div>
                <div class="col">
                  <span class="font-weight-bold">108</span>
                  <p class="size9">Menggunakan</p>
               </div>
              </div>
              <div class="row margin5">
                <div class="col-sm-2">
                  <ShareIcon className="sidebarIcon" />
                </div>
                <div class="col">
                  <span class="font-weight-bold">67</span>
                  <p class="size9">Meminjam</p>
                </div>
            </div>
          </div>
        </div>
  );
}

export default Relasi;

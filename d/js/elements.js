const buttonExport = `<button type="button" class="btn btn-primary" onclick="handleExport()">Export</button>`;
const buttonModelNew = `
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#model-new">
    Launch demo modal
  </button>
`
const modelNew = `
  <div class="modal fade" id="model-new" tabindex="-1" role="dialog" aria-labelledby="modal-title-new" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-title-new">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
`

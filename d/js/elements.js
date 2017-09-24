const buttonExport = `<button type="button" class="btn btn-primary" onclick="handleExport()">Export</button>`;
const buttonModelNew = `
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#model-new">
    新建任务
  </button>
`
const modelNew = `
  <div class="modal fade" id="model-new" tabindex="-1" role="dialog" aria-labelledby="modal-title-new" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-title-new">新建任务</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="next-mission-name">任务名</label>
              <input class="form-control" id="next-mission-name">
              <label for="next-mission-due">结束日期</label>
              <input class="form-control" id="next-mission-due" placeholder="2018-01-01">
              <label for="next-mission-count">数量</label>
              <input class="form-control" id="next-mission-count" placeholder="1000">
              <label for="next-mission-unit">计量单位</label>
              <input class="form-control" id="next-mission-unit" placeholder="次">
              <label for="next-mission-type">类型</label>
              <div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="next-mission-type" id="next-mission-type-1" value="standard"> 标准任务
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label">
                    <input class="form-check-input" type="radio" name="next-mission-type" id="next-mission-type-2" value="power"> 意志力任务
                  </label>
                </div>
              </div>
              <label for="next-mission-color">关联颜色</label>
              <input type="color" style="height: 38px;" class="form-control" id="next-mission-color">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="handleSubmitModal()">确定</button>
          </div>
        </div>
      </div>
    </div>
`

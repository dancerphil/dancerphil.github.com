const $store = JSON.parse(localStorage['Dancerphil-Dashboard']);
const $header = $('#header');
const $playground = $('#playground');
const $chart = $('#chart');
let $nextMission = null;

function handleSubmitModal() {
  $nextMission = {
    id: $store.length,
    name: $('#next-mission-name').val(),
    count: Math.floor($('#next-mission-count').val()),
    due: $('#next-mission-due').val(),
    unit: $('#next-mission-unit').val(),
    type: $("input[name='next-mission-type']:checked").val(),
    color: $('#next-mission-color').val(),
    history: []
  }
  $store.push($nextMission);
  setStore($store);
}

function handleExport() {
  console.log(JSON.stringify($store));
}

function handleClick(id) {
    const item = $store.find(item => item.id === id);
    const todayHistory = getTodayHistory(item.history);
    if (todayHistory) {
        todayHistory.count += 1;
    } else {
        item.history.push({date: moment().format('YYYY-MM-DD'), count: 1});
    }
    item.count -= 1;
    setStore($store);
    render();
}

function render() {
  $playground.html('');
  $store.forEach(item => {
    const rest = (new Date(item.due).getTime() - new Date().getTime()) / 86400000;
    const todayHistory = getTodayHistory(item.history) || {};
    const todayCount = todayHistory.count || 0;
    const mission = item.count / rest;
    let todayMission = mission - todayCount;
    if (todayMission < 0) {
        todayMission = 0;
    }
    $playground.append(`
      <div class="container" style="background: ${item.color}; width: 200px;" onclick="handleClick(${item.id})">
        <div>${item.name}</div>
        <div>剩余 ${item.count} ${item.unit}</div>
        <div>今日任务 ${todayMission.toFixed(2)} ${item.unit}</div>
        <div>明日任务 ${mission.toFixed(2)} ${item.unit}</div>
        <div>还有 ${Math.floor(rest)} 天</div>
        <div>历史： ${JSON.stringify(item.history)}</div>
      </div>
    `);
  });
}

function init() {
  $header.append(buttonModelNew);
  $header.append(modelNew);
  $header.append(buttonExport);
  render();
  setInterval(render, 1000);
}

init()

if(!localStorage['Dancerphil-Dashboard']) {
  const defaultValue = [
    {"id":1,"name":"俯卧撑","count":979,"due":"2018-01-01","unit":"次","color":"pink","history":[{"date":"2017-09-21","count":21}]},
    {"id":2,"name":"仰卧起坐","count":980,"due":"2018-01-01","unit":"次","color":"pink","history":[{"date":"2017-09-21","count":20}]},
    {"id":3,"name":"蹲起","count":969,"due":"2018-01-01","unit":"次","color":"palegreen","history":[{"date":"2017-09-21","count":31}]},
    {"id":4,"name":"挥剑","count":984,"due":"2018-01-01","unit":"次","color":"aliceblue","history":[{"date":"2017-09-21","count":16}]}
  ]
  setStore(defaultValue);
}

const $store = JSON.parse(localStorage['Dancerphil-Dashboard']);
const $header = $('#header');
const $playground = $('#playground');
const $chart = $('#chart');

function handleExport() {
  console.log(JSON.stringify($store));
}

$header.append(`
  <div onclick="handleExport()">Export</div>
`);

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
      <div class="container" style="background: ${item.color}" onclick="handleClick(${item.id})">
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
setInterval(render, 1000);

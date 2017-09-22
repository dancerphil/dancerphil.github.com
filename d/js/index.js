if(!localStorage['Dancerphil-Dashboard']) {
  localStorage['Dancerphil-Dashboard'] = `[{"id":1,"name":"俯卧撑","count":979,"history":[{"date":"2017-09-21","count":21}]},{"id":2,"name":"仰卧起坐","count":980,"history":[{"date":"2017-09-21","count":20}]},{"id":3,"name":"蹲起","count":969,"history":[{"date":"2017-09-21","count":31}]},{"id":4,"name":"挥剑","count":984,"history":[{"date":"2017-09-21","count":16}]}]`
}

function getTodayHistory(item) {
    const today = moment().format('YYYY-MM-DD');
    return item.history.find(i => i.date === today);
}

function handleClick(id) {
    const item = store.find(item => item.id === id);
    const today = moment().format('YYYY-MM-DD');
    const todayHistory = getTodayHistory(item);
    if (todayHistory) {
        todayHistory.count += 1;
    } else {
        item.history.push({date: today, count: 1});
    }
    item.count -= 1;
    localStorage['Dancerphil-Dashboard'] = JSON.stringify(store);
    render(store);
}

const store = JSON.parse(localStorage['Dancerphil-Dashboard']);
console.log(JSON.stringify(store));
function render(store) {
  $('#playground').html('');
  const rest = (new Date('2018-01-01').getTime() - new Date().getTime()) / 86400000;
  $('#header').html(`今年还有 ${Math.floor(rest)} 天`);
  store.forEach(item => {
    const todayHistory = getTodayHistory(item) || {};
    const todayCount = todayHistory.count || 0;
    let todayMission = item.count / rest - todayCount;
    if (todayMission < 0) {
        todayMission = 0;
    }
    $('#playground').append(`
      <div class="container" onclick="handleClick(${item.id})">
        <div>任务名： ${item.name}</div>
        <div>剩余： ${item.count}</div>
        <div>今日任务： ${todayMission}</div>
        <div>历史： ${JSON.stringify(item.history)}</div>
      </div>
    `);
  });
}
setInterval(() => render(store), 1000);
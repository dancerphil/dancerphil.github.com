// stateless function
function setStore(store) {
  localStorage['Dancerphil-Dashboard'] = JSON.stringify(store);
}

function getTodayHistory(history) {
  if(Array.isArray(history)) {
    const today = moment().format('YYYY-MM-DD');
    return history.find(i => i.date === today);
  }
  console.warn('history must be an array');
  return {};
}

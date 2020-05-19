export function formatDateStringShort(dateString){
  const date = new Date(dateString);
  return date.toLocaleDateString('pl-pl', {
    //weekday: 'short',
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  });
};

export function calculateWinner(results){
  const sumOfPoints = results.map(result => 
    Math.max(...(result.scores.map(score => 
      Object.values(score.points).reduce((x, y) => x + y, 0))
    )))
  const winners = results.map((result,index) =>
    result.scores.find(score =>
      Object.values(score.points).reduce((x, y) => x + y, 0) === sumOfPoints[index]).user.name)
  return winners
}

export function compareObjects(key,order='asc') {
  return function innerSort(a,b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      console.log('abrakadabra')
      return 0
    }
    const varA = (typeof a[key]=== 'string') ? a[key].toUpperCase() : a[key]
    const varB = (typeof b[key]=== 'string') ? b[key].toUpperCase() : b[key]
    let comparison = 0
    if(varA>varB) {
      comparison = 1
    }else if(varA<varB){
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    )
  }
}
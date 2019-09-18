function solution(priorities, location) {
  let loc = location;
  let orders = [...priorities];
  let result = [];
  let answer = 0;
  while(1) {
    while (orders[0] !== Math.max.apply(null, orders)) {
      --loc;
      const first = orders.shift();
      orders.push(first);
      if (loc === -1) loc = orders.length - 1;
    }
    if (loc === 0) {
      break;
    } else {
      result.push(orders.shift());
      --loc;
      ++answer;
    }
    console.log(orders, loc);
  }
  return ++answer;
}

//const a = solution([2, 1, 3, 2], 2);
const a = solution([1, 1, 9, 1, 1, 1],0);
//const a = solution([3, 3, 4, 2], 3);
console.log(a);

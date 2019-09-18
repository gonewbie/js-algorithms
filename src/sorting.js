exports.insertionSort = (arr) => {
  let resArr = [...arr];
  let j;
  const len = resArr.length;
  for (let i = 1; i < len; i++) {
    let el = resArr[i];
    for(j = i - 1; j >= 0 && resArr[j] > el; j--) {
      resArr[j + 1] = resArr[j];
    }
    resArr[j + 1] = el;
  }

  return resArr;
};

exports.mergeSort = (arr) => {
  let _merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
  }
  let resArr = [...arr];
  if (resArr.length < 2) return resArr;
  let pivot = Math.floor(resArr.length / 2);
  let left = resArr.slice(0, pivot);
  let right = resArr.slice(pivot, resArr.length);
  return _merge(this.mergeSort(left), this.mergeSort(right));
}
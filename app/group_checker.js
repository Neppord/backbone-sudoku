define(['_'], function (_) {
  return function (row) {
    return _.uniq(row).length === 9;
  }
})

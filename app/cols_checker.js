define('_', function (_) {
  return function (group_checker) {
    return function (board){
      return _.all(_(board.cols()).map(function (row) {
        return group_checker(row);
      }));
    }
  }
})

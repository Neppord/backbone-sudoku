define(['_'], function () {
  return function (rows_checker, cols_checker, squares_checker) {
    return function (board) {
      return _.all([
        rows_checker(board),   
        cols_checker(board),   
        squares_checker(board)   
      ]);
    }
  }
})

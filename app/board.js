define(['_'], function (_) {
  return function board(data) {
    data = data || _(_.range(9)).map(function () {
      return _(_.range(9)).map(function () {return -1});
    });
    return {
      row: function (i) {
        return data[i];
      },
      rows: function () {
        return _(_.range(9)).map(function (n) {
          return this.row(n);
        })
      },
      col: function (i) {
        return _(data).map(function (row) {return row[i]});
      },
      cols: function () {
        return _(_.range(9)).map(function (n) {
          return this.col(n);
        })
      },
      square: function (i) {
        var x_off = (i % 3) * 3;
        var y_off = Math.floor(i / 3) * 3;
        var cords = _.range(9).map(function (n) {
          return [n % 3 + x_off, Math.floor(n / 3) + y_off]
        });
        return _(cords).map(function (c) {
          return data[c[0]][c[1]];
        });
      },
      squares: function () {
        return _(_.range(9)).map(function (n) {
          return this.square(n);
        })
      },
      raw: function () {return data;}
    }
  }
});

var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];


module.exports.getChange = function (paid, cost) {
  var difference = Math.round(100*(paid-cost)),
    result = [],
    coinIndex;
  
  while (difference>0) {
    for (coinIndex = 0; coinIndex < coins.length; coinIndex++) {
      if (coins[coinIndex]<=difference) break;
    }
    
    result.push(coins[coinIndex]);
    difference-=coins[coinIndex];
  }
  
  return result;
};
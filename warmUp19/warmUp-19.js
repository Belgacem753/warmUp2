/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
 design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
  // YOUR CODE HERE
  
 if(max(prices) <= min(prices)){
   return "max profit = 0"
 } else if (max(prices) > min(prices) ){
   if(prices.indexOf(max(prices)) > prices.indexOf(min(prices))){
     return "max profit = "+(max(prices) - min(prices))
   }
   else {
     return "max profit = 0"; 
 }

};

function max (array){
  var max = array[0];
  var arr =array.slice(1)
  for (var i=0; i<arr.length; i++){
    if (arr[i]>max){
      max = arr[i]
    } else if (arr[i] <= max ){
      max = max;
    }
  }
  return max;
}

function min (array){
  var min = array[0];
  var arr =array.slice(1)
  for (var i=0; i<arr.length; i++){
    if (arr[i]<min){
      min = arr[i]
    } else if (arr[i] >= min ){
      min = min;
    }
  }
  return min;
}


function checkCashRegister(price, cash, cid) {
  var change = {status: "OPEN", change: []};
  let changeAmount = cash - price;

  let drawerTotal = 0;
  for (let i = 0; i < cid.length; i++) {
    drawerTotal += cid[i][1];
  }
  if (drawerTotal == changeAmount) {
    return {status: "CLOSED", change: cid};
  }

  for (let i = cid.length-1; i >= 0; i--) {
    if (changeAmount >= unit2Amount[cid[i][0]]) {
      if (unit2Amount[cid[i][0]] <= cid[i][1]) {
        let currentCount = 0;
        while (Math.ceil(changeAmount * 100) / 100 >= unit2Amount[cid[i][0]] && unit2Amount[cid[i][0]] <= cid[i][1]) {
          cid[i][1] -= unit2Amount[cid[i][0]];
          changeAmount -= unit2Amount[cid[i][0]];
          currentCount++;
        }
        change.change.push([cid[i][0], unit2Amount[cid[i][0]]*currentCount]);
      } else {
        return {status: "INSUFFICIENT_FUNDS", change: []}; 
      }
    }
  }

  return change;
}

let unit2Amount = {
  "PENNY": .01,
  "NICKEL": .05,
  "DIME": .1,
  "QUARTER": .25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
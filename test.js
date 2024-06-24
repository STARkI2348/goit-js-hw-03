function calculateTotalPrice(order) {
    let a;
    let b;
    for(let i = 0; i < order.length - 1; i += 2){
        a = order[i] + order[i + 1];
        b = order[i + 4] + order[i + 2];
        order.push(a);
    }
    return order[order.length - 1];
  }
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice());

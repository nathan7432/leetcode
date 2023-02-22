/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let low = Math.max(...weights)
    let high = weights.reduce((a,b) => a+b, 0)
    while (low < high) {
        let mid = Math.floor((low + high) / 2)
        if (canShip(mid, weights, days))
            high = mid
        else {
            low = mid + 1
        }
    }
    return low
};

var canShip = (max, weights, days) => {
    let current_day = 1
    let current_weight = 0
    for (let i = 0; i < weights.length; i++) {
        current_weight += weights[i]
        if (current_weight > max) {
            current_day++
            current_weight = weights[i]
        }
    }
    return current_day <= days
}

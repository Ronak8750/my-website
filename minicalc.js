let num1 = 7
let num2 = 14
document.getElementById("dig1").textContent = num1
document.getElementById("dig2").textContent = num2
let sum = document.getElementById("result")
function plus() {
    let addition = num1 + num2
    sum.textContent = addition
}
    function minus() {
        let min = num1 - num2
        sum.textContent = min
    }
    function multi() {
        let mul = num1 * num2
        sum.textContent = mul
    }
    function fract() {
        let frac = num1 / num2
        sum.textContent = frac
    }
let number = prompt('Nhập 1 số có 3 chữ số') ;
let result = 0;
while(number>0){
    rightmost = number%10;
    result = result*10 + rightmost;
    number = Math.floor(number/10);
}
document.write("Reversed number is : " + result)
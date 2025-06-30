var sum = 0;
for(var i = 0; i < 8; i++){
    if(i % 3 === 0){
        sum += i;
    }
}
document.write(sum);
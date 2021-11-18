const number = [1,7,2,4];
let c=" ";
let text =[];
for (let i = 0 ; i < number.length; i++){
    for (let j = 0; j < number.length; ++j){
        if (number[i]!=number[j]){
            C=number[i]+number[j];
            if (C%3!=0){
                text.push(number[i])
            }
        }
    }
    text = text.filter((v,i,a) => a.indexOf (v) === i);
}
console.log(text)
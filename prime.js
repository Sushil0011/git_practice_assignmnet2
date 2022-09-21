function isprime(num){
    if(num<=0||num==1){
        return "Not a prime"
    }
    for(let i=2;i<=num**0.5;i++){
        if(num%i==0){
            return "Not a Prime";

        }
    }
    return "Prime";
}
console.log(isprime(13));
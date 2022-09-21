function isprime(num){
    for(let i=2;i<=num**0.5;i++){
        if(num%i==0){
            return "NO";

        }
    }
    return "Prime";
}
console.log(isprime(13));
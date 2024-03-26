function countPrimeNumbers(){
    function isPrime(number){
        for(var i = 2; i <number; i++){
            if(number%i===0){
                return false;
            }
            return number>1;
        }

    }
    let count = 0
    for(let i = 2 ; i<=100; i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count
}
const startTime = this.performance.now();

console.log(countPrimeNumbers())

const terminateTime = this.performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${
    terminateTime - startTime
  } milliseconds.`
);
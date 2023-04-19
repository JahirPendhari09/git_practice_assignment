// checking prime or not

let n=17;

let isPrime = true;
for(let i=0; i<n; i++){
   if(n%i ==0){
     isPrime = false;
   }
}

if(isPrime == true){
   console.log("Number is Prime");
}
else{
   console.log("Number is Not Prime"):
}
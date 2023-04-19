// Checking string is Palindrome or not

let str = "moon";

let n= str.length;

let isPalindrome = true;

for(let i=0; i<str.length; i++){
    if(str[i] != str[n-i-1]){
       isPalindrome = false;
    }
}

if(isPalindrome == true){
  console.log("String is Palindrome");
}
else{
  console.log("String is Not Palindrome");
}
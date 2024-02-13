var firstPalindrome = function(words) {
    let result = ""
    for(let i=0; i<words.length; i++){
        let reverseWord = words[i].split("").reverse().join("");
        if(reverseWord === words[i]){
            result = words[i]
            break
        }
    }
    return result;
};
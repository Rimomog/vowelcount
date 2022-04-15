function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    var vowelsCount = 0;
    let strArr = str.split('')
    for(let i = 0; i < strArr.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(strArr[i] === vowels[j]){
            vowelsCount += 1
        }
    }
}
    
return vowelsCount;
}
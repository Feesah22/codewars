
//https://www.codewars.com/kata/54ff3102c1bad923760001f3
//vaowel count
function getCount(str) {
    let vowelsCount = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }

    return vowelsCount;
}


function howManyRepeated(str) {
    try { return str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
    catch (e) { return 0; }
}


let i = 0;
let s = "";
let outputV = [];
function vowels(str) {
    const vowelList = ["a", "e", "i", "o", "u"];
    let consonants = ['b', 'c', 'd', 'j', 'g', 'h', 'k'];
    let vowelCountlist = [];

    for (let char of str.toLowerCase()) {
        if (vowelList.includes(char)) {           //testing vowels
            vowelCountlist[i] = char;
            i++;
        }
    }
    s = [...new Set(vowelCountlist)].toString();  // removing duplicates
    outputV[0] = s.split(',').join("");          // removing the separators
    outputV[1] = howManyRepeated(str);
    return console.log(outputV);

}

vowels("Goretyibiamaryejeu");



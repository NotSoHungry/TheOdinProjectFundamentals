var palindromes = function(str) {
    let strWithoutWhiteSpace = str.replace(/[^a-zA-Z0-9]/g, "");
    let reversedStr = strWithoutWhiteSpace
                        .split("")
                        .reverse()
                        .join("");
    return strWithoutWhiteSpace.toLowerCase() === reversedStr.toLowerCase() ? true : false;

}

module.exports = palindromes

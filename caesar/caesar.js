var caesar = function (str, shiftVal) {
    let letterCharacter = /[a-zA-Z]/,
        lowerCaseCharacter = /[a-z]/,
        currentLetterValue,
        newLetterValue,
        singleShift = (shiftVal > 0) ? 1 :
                      (shiftVal < 0) ? -1 : 0,
        firstLetterIndex = 65,
        lastLetterIndex = 90,
        arrFromString = str.split("");
        
    return arrFromString.map(character => {
              if (character.match(/[a-zA-Z]/))
              {
               currentLetterValue = character.toUpperCase().charCodeAt(0);
               newLetterValue = currentLetterValue;
               for (let i = 0; i !== shiftVal; i += singleShift) {
                 newLetterValue += singleShift;
                 if (newLetterValue > lastLetterIndex) {
                   newLetterValue = firstLetterIndex;
                 } else if (newLetterValue < firstLetterIndex) {
                   newLetterValue = lastLetterIndex;
                 }
               }
               return (character.match(lowerCaseCharacter)) ? String.fromCharCode(newLetterValue).toLowerCase() :
                                                              String.fromCharCode(newLetterValue);
              } else {return character};
            }).join("");
    
  }

module.exports = caesar

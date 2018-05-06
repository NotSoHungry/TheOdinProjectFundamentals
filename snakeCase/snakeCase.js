var snakeCase = function(str) {
    let formatOnlySpecialChars = /[^a-zA-Z]/
    let formatOnlyNormalChars = /[a-zA-Z]/
    let camelCaseformat = /[a-z][A-Z][a-z]/
    let cleanStr = str
                .split(formatOnlySpecialChars)
                .filter(element => element.match(formatOnlyNormalChars))
                .map(element => {
                  let camelPattern = element.match(camelCaseformat)
                  if (camelPattern) {
                    camelPattern = camelPattern.join("");
                    let camelPatternCorrected = camelPattern.replace(camelPattern[0], `${camelPattern[0]}_`)
                    element = element.replace(camelPattern, camelPatternCorrected);
                    return element;
                  } else {
                    return element;
                  }
                })
                .join("_");
    return cleanStr.toLowerCase();
}
module.exports = snakeCase

let stringExp = 'Good Morning!'
console.log(stringExp)

// 0 1 2 3 4 5 6 7 8 9 10 11
// G o o d   M o r n i  n  g

//Methods
//1. charAt()
//Action --> Returns the character at the specified index.
//Return type --> string
let charAtMethod = stringExp.charAt(2)
console.log(charAtMethod)
console.log(typeof charAtMethod)
console.log('-----------------------------------------------')

//2. 
//Action --> Returns the Unicode value of the character at the specified location.
//Return type --> number
let charCodeAtMethod = stringExp.charCodeAt(1)
console.log(charCodeAtMethod)
console.log(typeof charCodeAtMethod)
console.log('-----------------------------------------------')

// //3. codePointAt()
// //Action -->
// //Return type -->
// let a = stringExp.codePointAt(2)
// console.log(a)
// console.log(typeof a)
//console.log('-----------------------------------------------')

//4. concat()
//Action --> Returns a string that contains the concatenation of two or more strings
//Return type --> string
let concatMethod = stringExp.concat(' Komal')
console.log(concatMethod)
console.log(typeof concatMethod)
console.log('-----------------------------------------------')

//4. endsWith()
//Action --> Returns a true string ends with a specific string
//Return type --> boolean value
let endsWithMethod = stringExp.endsWith('Morning!')
console.log(endsWithMethod)
console.log(typeof endsWithMethod)
console.log('-----------------------------------------------')

//5. includes()
//Action --> Return true if search string is match in the string
//Return type --> boolean value
let includesMethods = stringExp.includes('Morning')
console.log(includesMethods)
console.log(typeof includesMethods)
console.log('-----------------------------------------------')


//6. indexOf()
//Action --> Returns the position of the first occurrence of a substring.
//Return type --> number
let indexOfMethods = stringExp.indexOf('o')
console.log(indexOfMethods)
console.log(typeof indexOfMethods)
console.log('-----------------------------------------------')

//7.. lastIndexOf()
//Action --> Returns the position of the last occurrence of a substring.
//Return type --> number
let lastIndexOfMethods = stringExp.lastIndexOf('o')
console.log(lastIndexOfMethods)
console.log(typeof lastIndexOfMethods)
console.log('-----------------------------------------------')

//8. length
//Action --> Returns the length of string.
//Return type --> number
let lengthProperty = stringExp.length
console.log(lengthProperty)
console.log(typeof lengthProperty)
console.log('-----------------------------------------------')

//9. localeCompare()
//Action --> Compares two string s in current locale
// return sort order -1 , 1 , 0(for before , after , or equal)
//Return type --> number
let a = 'Good'
let localeComapreMethod = stringExp.localeCompare(a)
console.log(localeComapreMethod)
console.log(typeof localeComapreMethod)
console.log('-----------------------------------------------')

//10. match()
//Action --> Matches a string with a regular expression, and returns an array containing the results of that search.
//Return type --> object

let matchMethod = stringExp.match('goo')
console.log(matchMethod)
console.log(typeof matchMethod)
console.log('-----------------------------------------------')
matchMethod = stringExp.match('Goo')

console.log(matchMethod)
console.log(typeof matchMethod)
console.log('-----------------------------------------------')

//11. matchAll()
//Action --> Matches a string with a regular expression, and returns an iterable of matches containing the results of that search.
//Return type --> object

let str = 'I am learning Java not a Javascript.'
let regExp = /Java[a-z]*/g
let matchAllMethod = [...str.matchAll(regExp)]
console.log(matchAllMethod[0])
console.log(matchAllMethod[1])

console.log(typeof matchAllMethod)
console.log('-----------------------------------------------')

//12. normalize()
//Action --> Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
//Return type --> string

let normalizeMethod = stringExp.normalize('NFC')
let normalizeMethod1 = stringExp.normalize('NFD')
let normalizeMethod2 = stringExp.normalize('NFKC')
let normalizeMethod3 = stringExp.normalize('NFKD')

console.log(normalizeMethod)
console.log(normalizeMethod1)
console.log(normalizeMethod2)
console.log(normalizeMethod3)
console.log(typeof normalizeMethod)
console.log(typeof normalizeMethod1)
console.log(typeof normalizeMethod2)
console.log(typeof normalizeMethod3)
console.log('-----------------------------------------------')

//13. padEnd()
//Action --> Pads the current string with a given string (possibly repeated) 
//so that the resulting string reaches a given length. 
//The padding is applied from the end (right) of the current string.


//Return type --> string

let padEndMethod = stringExp.padEnd(20, 'Komal')
console.log(padEndMethod)
console.log(typeof padEndMethod)
console.log('-----------------------------------------------')

//14. padStart()
//Action --> Pads the current string with a given string (possibly repeated) 
//so that the resulting string reaches a given length. 
//The padding is applied from the start (left) of the current string.


//Return type --> string
 
let padStartMethod = stringExp.padStart(15, '$')
console.log(padStartMethod)
console.log(typeof padStartMethod)
console.log('-----------------------------------------------')

//15. repeat()
//Action -->Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
//Return type --> string
let repeatMethod = stringExp.repeat(4)
console.log(repeatMethod)
console.log(typeof repeatMethod)
console.log('-----------------------------------------------')

//16. replace()
//Action -->Replaces text in a string, using a regular expression or search string.
//Return type --> string
let replaceMethod = stringExp.replace('Morning','Evening')
console.log(replaceMethod)
console.log(typeof replaceMethod)
console.log('-----------------------------------------------')

//16. search()
//Action -->Finds the first substring match in a regular expression search.
//Return type --> number
let searchMethod = stringExp.search('d')
console.log(searchMethod)
console.log(typeof searchMethod)
console.log('-----------------------------------------------')

//17. slice()
//Action -->Returns a section of a string.
//Return type --> string
let sliceMethod = stringExp.slice(0,4)
console.log(sliceMethod)
sliceMethod = stringExp.slice(-8,10)
console.log(sliceMethod)
console.log(typeof sliceMethod)
console.log('-----------------------------------------------')

//17. split()
//Action -->Split a string into substrings using the specified separator and return them as an array.
//Return type --> object
let splitMethod = stringExp.split('')
console.log(splitMethod)

splitMethod = stringExp.split(' ')
console.log(splitMethod)

splitMethod = stringExp.split('o')
console.log(splitMethod)
console.log(typeof splitMethod)
console.log('-----------------------------------------------')

//18. startsWith()
//Action -->Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
//Return type --> boolean
let startsWithMethods = stringExp.startsWith('good')
console.log(startsWithMethods)

startsWithMethods = stringExp.startsWith('Good')
console.log(startsWithMethods)

startsWithMethods = stringExp.startsWith('Morning')
console.log(startsWithMethods)
console.log(typeof startsWithMethods)
console.log('-----------------------------------------------')
 
//19. substring()
//Action --> Returns the substring at the specified location within a String object.
//Return type --> string
let substringMethod = stringExp.substring(2)
console.log(substringMethod)
console.log(typeof substringMethod)
console.log('-----------------------------------------------')

//20. toLocaleLowerCase()
//Action -->Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
//Return type --> string
let toLocaleLowerCaseMethod = stringExp.toLocaleLowerCase()
console.log(toLocaleLowerCaseMethod)
console.log(typeof toLocaleLowerCaseMethod)
console.log('-----------------------------------------------')

//21. toLocaleUpperCase()
//Action -->Converts all alphabetic characters to uppercase, taking into account the host environment's current locale.
//Return type --> string
let toLocaleUpperCaseMethod = stringExp.toLocaleUpperCase()
console.log(toLocaleUpperCaseMethod)
console.log(typeof toLocaleUpperCaseMethod)
console.log('-----------------------------------------------')


//22. toLowerCase()
//Action -->Converts all the alphabetic characters in a string to lowercase..
//Return type --> string
let toLowerCaseMethod = stringExp.toLowerCase()
console.log(toLowerCaseMethod)
console.log(typeof toLowerCaseMethod)
console.log('-----------------------------------------------')

//23. toString()
//Action -->Returns a string representation of a string.
//Return type --> string
let toStringMethod = stringExp.toString()
console.log(toStringMethod)
let num = 123
toStringMethod = num.toString()
console.log(toStringMethod)
console.log(typeof toStringMethod)
console.log('-----------------------------------------------')

//24. toUpperCase()
//Action -->Converts all the alphabetic characters in a string to uppercase..
//Return type --> string
let toUpperCaseMethod = stringExp.toUpperCase()
console.log(toUpperCaseMethod)
console.log(typeof toUpperCaseMethod)
console.log('-----------------------------------------------')

//25. trim()
//Action -->Removes the leading and trailing white space and line terminator characters from a string.
//Return type --> string
let str12 = ' gdo  jdjd  '
console.log(str12.length)
let trimMethod = str12.trim()
console.log(trimMethod)
console.log(trimMethod.length)
console.log(typeof trimMethod)
console.log('-----------------------------------------------')

//26. trimEnd()
//Action -->Removes the trailing white space and line terminator characters from a string.
//Return type --> string
let str123 = ' gdo  jdjd  '
console.log(str123.length)
let trimEndMethod = str123.trimEnd()
console.log(trimEndMethod)
console.log(trimEndMethod.length)
console.log(typeof trimEndMethod)
console.log('-----------------------------------------------')

//27. trimStart()
//Action -->Removes the leading white space and line terminator characters from a string.
//Return type --> string
let str1234 = ' . gdo  jdjd .  '
console.log(str1234.length)
let trimStartMethod = str1234.trimStart()
console.log(trimStartMethod)
console.log(trimStartMethod.length)
console.log(typeof trimStartMethod)
console.log('-----------------------------------------------')

//28. valueOf()
//Action -->Returns the primitive value of the specified object.
//Return type --> string
let valueOfMethod = stringExp.valueOf()
console.log(valueOfMethod)
console.log(typeof valueOfMethod)
console.log('-----------------------------------------------')

 
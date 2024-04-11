const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
76,50,42,36,63,13,31,36,91,26,56,39,48,60,90,25,55,62,15,95,56,16,33,88,0,19,95,6,65,61,53,44,47,84,30,32,30,99,87,11,66,32,34,7,62,9,82,26,68,78,88,13,66,96,19,42,65,59,29,3,19,73,50,41,84,56,66,50,44,79,24,66,37,34,72 - false
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const multiply = (a, b) => a * b;
68 - 73,40,84,91,45,79,37,19,45,51,21,30,47,77

const randomNumber = getRandomNumber();
const squareRoot = num => Math.sqrt(num);
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
kiwi

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
apple

const getUniqueValues = array => [...new Set(array)];
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
8,35,35,36,35,25,92,18,21,62,77,80,75,63,65,13,22,90,44,25,94,63,21,71,26,85,76,49,40,90,72,87,83,89,95,56,27,48,25,17,44,67,9,87,70,18 + kiwi
const fetchData = async url => { const response = await fetch(url); return response.json(); }
false - banana
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
true - orange
const isPalindrome = str => str === str.split("").reverse().join("");
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const sum = (a, b) => a + b;
grape * apple
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const removeDuplicates = array => Array.from(new Set(array));
75 + orange
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");


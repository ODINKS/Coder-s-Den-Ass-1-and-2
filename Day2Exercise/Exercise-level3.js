// EXERCISE: Level 3.

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let pattern1 = /love/gi;
let pattern2 = sentence1.match(pattern1);
let pattern3 = pattern2.length;
console.log(pattern3);

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
let pattern4 = /because/gi;
let pattern5 = sentence2.match(pattern4);
console.log(pattern5.length)

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let clean1 = sentence.replace(/\%/gi, '');
let clean2 = clean1.replace(/\$/gi, '');
let clean3 = clean2.replace(/\@/gi, '');
let clean4 = clean3.replace(/\#/gi, '');
let clean5 = clean4.replace(/\&/gi, '');
let clean6 = clean5.replace(/\;/gi, '');
let clean7 = 
console.log(clean6);

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let regEx = /\d+/g;
let income = text.match(regEx);
let annualSalary = Number(income[0]) * 12;
let annualBonus = Number(income[1]);
let annualCourseEarned = Number(income[2]) * 12;

let totalAnnualIncome = annualSalary + annualBonus + annualCourseEarned;
console.log(totalAnnualIncome.toLocaleString('en-US') + ' euros');
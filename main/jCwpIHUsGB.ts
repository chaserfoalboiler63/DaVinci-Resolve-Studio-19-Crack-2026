function debounce(func: Function, delay: number) {
 let timeoutId: NodeJS.Timeout;
 return function(...args: any[]) {
   if (timeoutId) {
     clearTimeout(timeoutId);
   }
   timeoutId = setTimeout(() => {
     func(...args);
   }, delay);
 };
}
function throttle(func: Function, limit: number) {
 let lastFunc: NodeJS.Timeout;
 let lastRan: number;
 return function(...args: any[]) {
   if (!lastRan) {
     func(...args);
     lastRan = Date.now();
   }
   if (lastFunc) {
     clearTimeout(lastFunc);
   }
   lastFunc = setTimeout(() => {
     if ((Date.now() - lastRan) >= limit) {
       func(...args);
       lastRan = Date.now();
     }
   }, limit - (Date.now() - lastRan));
 };
}
function sum(...numbers: number[]): number {
 return numbers.reduce((acc, num) => acc + num, 0);
}
function average(...numbers: number[]): number {
 return sum(...numbers) / numbers.length;
}
function unique<T>(array: T[]): T[] {
 return Array.from(new Set(array));
}
function flatten<T>(array: T[]): T[] {
 return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

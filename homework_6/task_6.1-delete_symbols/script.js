let inpStr = prompt('Введіть рядок');
let inpSym = prompt('Введіть символ').split('');

function delSymbol(string, symbols) {
   let res = '';
   for (let i = 0; i < string.length; i++) {
      if(symbols.includes(string[i]) !== true) {
         res += string[i];
      }
   }
   return res;
}

delSymbol(inpStr, inpSym);
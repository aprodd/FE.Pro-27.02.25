let inpStr = prompt('Введіть рядок');
let inpSym = prompt('Введіть символ');

function delSymbol(str, sym) {
   for (let i = 0; i < str.length; i++) {
      if (str[i] === sym) {
         str = str.split(sym).join('');
      }
   }
   return str;
}

delSymbol(inpStr, inpSym);




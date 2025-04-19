let table = document.createElement('table');

document.body.append(table);
table.style.border = '3px solid red';

for (let i = 1; i <= 10; i++) {
  let tr = document.createElement('tr');
  table.appendChild(tr);
  
  for (let j = 1; j <= 10; j++) {
    let td = document.createElement('td');
    td.style.border = '1px solid black';
    
    tr.appendChild(td);
    td.innerText = i * j;
  }
}

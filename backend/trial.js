// // add new items to the table in items.html
// var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

// // Insert a row at the end of table
// var newRow = tbodyRef.insertRow();

// // Insert a cell at the end of the row
// var newCell = newRow.insertCell();

// // Append a text node to the cell
// var newText = document.createTextNode('new row');
// newCell.appendChild(newText);


function Insert(name, price){
    var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var newRow = tbodyRef.insertRow();
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(name);
    newCell.appendChild(newText);
    var newCell = newRow.insertCell();
    var newText = document.createTextNode(price);
    newCell.appendChild(newText);
}

Object.onclick = Insert("name", "price")
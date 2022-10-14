// // add new items to the table in items.html
// var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

// // Insert a row at the end of table
// var newRow = tbodyRef.insertRow();

// // Insert a cell at the end of the row
// var newCell = newRow.insertCell();

// // Append a text node to the cell
// var newText = document.createTextNode('new row');
// newCell.appendChild(newText);


// function Insert(name, price){
//     var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
//     var newRow = tbodyRef.insertRow();
//     var newCell = newRow.insertCell();
//     var newText = document.createTextNode(name);
//     newCell.appendChild(newText);
//     var newCell = newRow.insertCell();
//     var newText = document.createTextNode(price);
//     newCell.appendChild(newText);
// }

//Object.onclick = Insert("name", "price")
document.addEventListener("DomContentLoaded", function(){console.log("aaa")
 document.getElementById("add_button").onclick = addItem()});
function addItem(){
    //var name = document.getElementById("name").value;
    //var price = document.getElementById("price").value;
    let text;
                  let product = prompt("New Product Name:");
                  let price = prompt("New Product Price:");
                  if (product == null || product == "" || price == null || price == "") {
                    text = "User cancelled the prompt.";
                  } else{
    var row = document.createElement("tr");
    row.id = name.replace(' ', '_');
    var n = document.createElement("td");
    n.innerHTML = name;
    var p = document.createElement("td");
    p.innerHTML = price;
    row.appendChild(n);
    row.appendChild(p);
    document.getElementById("myTable").appendChild(row);
    var b = document.createElement("button");
    b.appendChild(document.createTextNode("Delete"));
    b.onclick = function(){
        document.getElementById("myTable").removeChild(row);
    }
    var d = document.createElement("td");
    d.appendChild(b);
    row.appendChild(d);
}
}

function deleteItem(id){
    var row = document.getElementById(id);
    row.parentNode.removeChild(row);
}

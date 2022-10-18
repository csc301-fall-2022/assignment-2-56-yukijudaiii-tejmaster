document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("add_update_item").addEventListener("click", addItem);
});

function addItem() {
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var quantity = document.getElementById('quantity').value;
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    if (name == "" || price == "" || quantity == "" || price <= 0 || quantity <= 0) {return ;}
    id = name.replace(/\s/g, '_');
    var check_value = document.getElementById(id);
    if (check_value != null) {
        row = document.getElementById(id);
        row.cells[1].innerHTML = parseInt(price).toFixed(2);
        row.cells[2].innerHTML = quantity;
        row.cells[3].innerHTML = (Math.round(quantity * price * 100) / 100).toFixed(2);
        calculate_all();
    } else {
        var row = document.createElement("tr");
        row.id = id;
        var n = document.createElement("td");
        n.innerHTML = name;
        var p = document.createElement("td");
        p.innerHTML = parseInt(price).toFixed(2);
        var q = document.createElement("td");
        q.innerHTML = quantity;
        var total = document.createElement("td");
        total.innerHTML = (Math.round(quantity * price * 100) / 100).toFixed(2);
        row.appendChild(n);
        row.appendChild(p);
        row.appendChild(q);
        row.appendChild(total);

        // button for minus
        var b1 = document.createElement("button");
        b1.classList.add("decrease");
        b1.appendChild(document.createTextNode("-"));
        var minus = document.createElement("td");
        minus.appendChild(b1);
        row.appendChild(minus);

        // button for plus
        var b2 = document.createElement("button");
        b2.appendChild(document.createTextNode("+"));
        b2.classList.add("increase");
        var plus = document.createElement("td");
        plus.appendChild(b2);
        row.appendChild(plus);

        // button for delete
        var b3 = document.createElement("button");
        b3.appendChild(document.createTextNode("delete"));
        b3.classList.add("delete");
        var d = document.createElement("td");
        d.appendChild(b3);
        row.appendChild(d);
        $(document.getElementById("cart-items")).find('tbody').append(row);

        calculate_all();
        b1.onclick = function() {
            var q = row.cells[2].innerHTML;
            if (q > 1) {
                row.cells[2].innerHTML = q - 1;
                row.cells[3].innerHTML = (Math.round(row.cells[1].innerHTML * row.cells[2].innerHTML * 100) / 100).toFixed(2);
                calculate_all();
            } else {
                document.getElementById("cart-items").deleteRow(row.rowIndex);
            }
        };
        b2.onclick = function() {
            var q = row.cells[2].innerHTML;
            row.cells[2].innerHTML = parseInt(q) + 1;
            row.cells[3].innerHTML = (Math.round(row.cells[1].innerHTML * row.cells[2].innerHTML * 100) / 100).toFixed(2);
            calculate_all();  
        };
        b3.onclick = function(){
            document.getElementById("cart-items").deleteRow(row.rowIndex);
            calculate_all();
        }

    }
}



function calculate_all() {
    calculate_subtotal();
    calculate_tax();
    calculate_total();
}

function calculate_subtotal() {
    var table = document.getElementById("cart-items");
    var subtotal = 0;
    for (var i = 1, row; row = table.rows[i]; i++) {
        subtotal += parseFloat(row.cells[3].innerHTML);
    }
    document.getElementById("subtotal").innerHTML = (Math.round(subtotal * 100) / 100).toFixed(2);
}

function calculate_tax() {
    var tax = 0.13;
    var subtotal = document.getElementById("subtotal").innerHTML;
    document.getElementById("taxes").innerHTML = (Math.round(subtotal * tax * 100) / 100).toFixed(2);
}

function calculate_total() {
    var subtotal = document.getElementById("subtotal").innerHTML;
    var taxes = document.getElementById("taxes").innerHTML;
    document.getElementById("grand_total").innerHTML = (Math.round(parseFloat(subtotal) + parseFloat(taxes) * 100) / 100).toFixed(2);
}
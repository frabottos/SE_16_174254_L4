function showForm(){
    
    var form = document.getElementById("add_form");
    if(form.style.display=="block"){
        form.style.display = "none";
        form.reset();
    }else
        form.style.display="block";

};

function AddData() {
	appendRow();
    
	alert("CIAO");
}

// append row to the HTML table
function appendRow() {
    var tbl = document.getElementById('E_Table'), // table reference
        row = tbl.insertRow(tbl.rows.length), rowx;
    // insert table cells to the new row
    
    createCell(row.insertCell(0), idx, 'id');
	createCell(row.insertCell(1), "Mario", 'name');
	createCell(row.insertCell(2), "Rossi", 'surname');
	createCell(row.insertCell(3), "1", 'level');
	createCell(row.insertCell(4), "1000", 'salary');
    idx++;
	rowx++;
}
 
// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}

var m_Emp = [[],[]];
var count =0;
var idx = 0;

showForm();



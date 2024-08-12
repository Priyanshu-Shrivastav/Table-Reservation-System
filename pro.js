let row = null;

function submit() {
  let dataEntered = retreivingDataFromForm();
  let readData = readDataFromLocalStorage(dataEntered);

  if (dataEntered == false) {
    msg.innerHTML = "Please enter Data";
  } else {
    if (row == null) {
      insertData(readData);
      msg.innerHTML = "Data inserted";
    } else {
      update();
      msg.innerHTML = "Data updated";
    }
  }
  document.getElementById('form').reset();
}

function retreivingDataFromForm() {
  let tableid = document.getElementById("tableid").value;
  let min_cap = document.getElementById("min_cap").value;
  let max_cap = document.getElementById("max_cap").value;
  let arr = [tableid, min_cap, max_cap];
  if (arr.includes("")) {
    return false;
  } else {
    return arr;
  }
}

function readDataFromLocalStorage(dataEntered) {
  let table = localStorage.setItem("tableid", dataEntered[0]);
  let min = localStorage.setItem("min_cap", dataEntered[1]);
  let max = localStorage.setItem("max_cap", dataEntered[2]);

  let t = localStorage.getItem("tableid", dataEntered[0]);
  let mi = localStorage.getItem("min_cap", dataEntered[1]);
  let ma = localStorage.getItem("max_cap", dataEntered[2]);

  let arr = [t, mi, ma];
  return arr;
}

function insertData(readData) {
  let row1 = table.insertRow();
  let cell1 = row1.insertCell(0);
  let cell2 = row1.insertCell(1);
  let cell3 = row1.insertCell(2);
  let cell4 = row1.insertCell(3);

  cell1.innerHTML = readData[0];
  cell2.innerHTML = readData[1];
  cell3.innerHTML = readData[2];
  cell4.innerHTML = `<button onclick='edit(this)'>Edit</button><button onclick='remove(this)'>Delete</button>`;
}

function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("tableid").value = row.cells[0].innerHTML;
  document.getElementById("min_cap").value = row.cells[1].innerHTML;
  document.getElementById("max_cap").value = row.cells[2].innerHTML;
}

function update() {
  row.cells[0].innerHTML = document.getElementById("tableid").value;
  row.cells[1].innerHTML = document.getElementById("min_cap").value;
  row.cells[2].innerHTML = document.getElementById("max_cap").value;
  row = null;
}

function remove(td) {
  row = td.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
}

var liststudent = new Array();

function Student() {
    this.Mssv = '';
    this.Name = '';
    this.Genger = '';
    this.Birthday = '';
    this.Subject = '';
    this.getStudent=function()
    {
        return "Mã số:"+this.Mssv+"\n"+
        "Họ tên: "+this.Name+"\n"+
        "Giới tính: "+this.Genger+"\n"+
        "Ngày sinh:"+this.Birthday.getBirthday()+"\n"+
        "Môn đăng kí: "+this.Subject;
    }
}

function Birthday() {
    this.Day = '';
    this.Month = '';
    this.Year = '';
    this.getBirthday = function () {
        return this.Day + "/" + this.Month + "/" + this.Year;
    }
}

function addinfo() {
    var student = new Student();
    var mssv = document.getElementById("mssv").value;
    var name = document.getElementById("name").value;
    var boy = document.getElementById("boy").checked;
    var birthday = new Birthday();
    birthday.Day = document.getElementById("day").value;
    birthday.Month = document.getElementById("month").value;
    birthday.Year = document.getElementById("year").value;
    student.Genger = "Nữ"
    if (boy) {
        student.Genger = "Nam";
    }
    student.Mssv = mssv;
    student.Name = name;
    student.Birthday = birthday;
    var subject = document.getElementById("col2").innerText;
    student.Subject = subject;
    var table = document.getElementById("table");
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = student.Mssv;
    cell2.innerHTML = student.Name;
    cell3.innerHTML = student.Genger;
    cell4.innerHTML = student.Birthday.getBirthday();
    liststudent.push(student);
}

function Add() {
    var col1 = document.getElementById("col1");
    var col2 = document.getElementById("col2");
    var i = col1.selectedIndex;
    var e = col1.options[i].text;
    var option = document.createElement("option");
    option.text = e;
    col2.add(option);
    col1.remove(i);
}

function Delete() {
    var col1 = document.getElementById("col1");
    var col2 = document.getElementById("col2");
    var i = col2.selectedIndex;
    var e = col2.options[i].text;
    var option = document.createElement("option");
    option.text = e;
    col1.add(option);
    col2.remove(i);
}

function AddAll() {
    var col1 = document.getElementById("col1");
    var col2 = document.getElementById("col2");
    for (var i = 0; i < col1.length; i++) {
        var option = document.createElement("option");
        option.text = col1.options[i].text;
        col2.add(option);
    }
    col1.innerText = "";
}

function DeleteAll() {
    var col1 = document.getElementById("col1");
    var col2 = document.getElementById("col2");
    for (var i = 0; i < col2.length; i++) {
        var option = document.createElement("option");
        option.text = col2.options[i].text;
        col1.add(option);
    }
    col2.innerText = "";
}

function Validate() {
    var subject = document.getElementById("col2").innerText;
    var mssv = document.getElementById("mssv").value;
    var name = document.getElementById("name").value;
    if (mssv == "" || name == "" || subject == "") {
        alert("Chưa điền đủ thông tin hoặc chưa chọn môn học!");
        return false;
    }
    return true;
}

function Register() {
    if (Validate()) {
        addinfo();  
    }
    Rowclick(); 
}

function Rowclick() {
    var table = document.getElementById("table");
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            alert(liststudent[this.rowIndex-1].getStudent());
        };
    }
}

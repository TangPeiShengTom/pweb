function check() {
    let name = document.getElementById("iName").value;
    let pw = document.getElementById("jName").value;

    if (name == "" || pw == "") {
        alert("重新输入");
        return;
    }

    if (name.trim().length < 6 || pw.trim().length < 6) {
        alert("长度不够，重新输入");
        return;
    }
    document.location = "index.html";
}

function res() {
    document.getElementById("iName").value = "";
    document.getElementById("jName").value = "";

}

function getValue() {
    let x = document.getElementById("header");

    let pw = document.getElementsByName("pw");
    //alert("pw ="+pw[0].value + "," + pw[1].value);

    let li = document.getElementsByTagName("li");
    //alert("len:"+li.length);
    alert("value:" + li[2].childNodes[0].nodeValue);

    let name = document.getElementById("iName").value;
    let jName = document.getElementById("jName").value;

}
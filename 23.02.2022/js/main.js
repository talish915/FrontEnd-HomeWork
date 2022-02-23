function Back() {
    var inp=document.getElementById("inp").value;
    inp=inp.slice(0,-1);
    document.getElementById("inp").value=inp;
}

function Space() {
    var inp = document.getElementById("inp").value;
    inp = inp + " ";
    document.getElementById("inp").value = inp;
}
function Change() {
    var inp = document.getElementById("inp").value;
    if (inp == "change") {
        document.body.setAttribute("class","bg-img")
    }
}
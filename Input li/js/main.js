function Ok() {
    var inp = document.getElementById("inp").value;
    if (inp != "") {
        var li = document.createElement("li");
        li.innerText = inp
        var s = document.createElement("span")
        var t = document.createTextNode("X")
        s.style.marginLeft = "100px"
        s.style.cursor = "pointer"
        s.onclick = function Rmw() {
            li.remove()
        }
        s.appendChild(t)
        li.appendChild(s)
        document.getElementById("ul").appendChild(li);
    }
    else{
        alert("Bos ola bilmez")
    }
}
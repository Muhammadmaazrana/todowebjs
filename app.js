var list=document.getElementById("list")

function savetodo(){
    var todo_item=document.getElementById("todoitem");
    var li=document.createElement('li');
    var litext=document.createTextNode(todo_item.value);
    li.appendChild(litext);
    list.appendChild(li);

    var del=document.createElement("button")
    var deltext=document.createTextNode("DELETE")
    del.setAttribute("class","del")
    del.setAttribute("onclick","delbtn(this)")
    del.appendChild(deltext);
    li.appendChild(del);
    todo_item.value="";
}
function delbtn(e){
    e.parentNode.remove()

}
function deleteall(){
    list.innerHTML="";
}

let submit = document.getElementById("subButton");
let clear = document.getElementById("clButton");
let mark = document.getElementById("markButton");
let delB = document.getElementById("delButton");

function init()
{
	submit.addEventListener("click", function(event){
		let newTodo= document.getElementById("newT");
      	event.preventDefault();

        //Crear checkbox
        let div = document.createElement("div");
        div.setAttribute("class", "newToDo");

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "checkboxes");
		div.appendChild(checkbox);

		//Crear tarea
		let span2 = document.createElement("span");
		let newElement = document.createTextNode("  " + newTodo.value);
		span2.appendChild(newElement);

		//Juntar checkbox y tarea
		div.appendChild(span2);

		//Limpiar textarea
		newTodo.value="";

		//Agregar al panel de tarea
		let todoItem = document.getElementById("todoPanel");
		todoItem.appendChild(div);
	});


	clear.addEventListener("click", function(event){
		event.preventDefault();

		let i=0; 
		let checkTodo= document.getElementsByClassName("checkboxes");
		for(i; i<checkTodo.length; i++)
		{
			checkTodo[i].checked=false;
		}
	});

	mark.addEventListener("click", function(event){
		event.preventDefault();

		let i=0;
		let checkTodo= document.getElementsByClassName("checkboxes");
		for(i; i<checkTodo.length; i++)
		{
			checkTodo[i].checked=true;
		}
	});

	delB.addEventListener("click", function(event){
		event.preventDefault();

		let todoItem = document.getElementById("todoPanel");
		todoItem.innerHTML="";
	});
}
init();
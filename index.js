
function addItem() {
	const input = document.getElementById("add-input");
	const value = input.value.trim();

	if (value !== "") {
		
		const li = document.createElement("li");
		li.textContent= value;

		document.getElementById("items-list").appendChild(li);
		input.value= '';

		
	}

}
const removeItem = (event) => {
	const list = document.getElementById("items-list");

	list.innerHTML = "";
	const items = document.querySelectorAll("li");
	
}
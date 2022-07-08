//variables
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// event listeners

//form submission event

form.addEventListener("submit", addItem);

//Delete list item event

itemList.addEventListener("click", removeItem);

// Add item into the list

filter.addEventListener("keyup", filterItems);

//functions
//add item
function addItem(e) {
  e.preventDefault();

  //get input value from user

  var newItem = document.getElementById("item").value;
  console.log(newItem);

  //create new li element
  var li = document.createElement("li");
  //Add class

  li.className = "list-group-item";

  //Add text to li
  li.textContent = newItem;

  //create new delete button
  var deleteBtn = document.createElement("button");

  //add classes to delete button

  deleteBtn.className = "btn btn-danger btn-sm float-right ms-5 delete";

  //add text to delete button
  deleteBtn.textContent = "X";
  //append del button in li
  li.appendChild(deleteBtn);

  //append that li into item List
  itemList.append(li);
}

//remove item
function removeItem(e) {}

//filter items
function filterItems(e) {
  //capture the text from the input
  //CONVERT IT INTO LOWERCASE

  var text = e.target.value.toLowerCase();

  //GET LIST OF ITEMS
  var items = itemList.getElementsByTagName("li");

  //Convert it into array

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

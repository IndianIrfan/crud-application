// CRUD APP(JS CODE)
const text = document.getElementById("text");
const icon = document.getElementById("check");
var list = document.getElementById("list");
icon.addEventListener("click", () => {
  if (text.value === '') {
    alert('Please enter your tasks');
  }
  else if (text.length >= "35") {
    alert("please enter a short task not more than 12 characters");
  }
  else {
    let item = document.createElement("li");
    item.innerHTML = text.value;

    let editButton = document.createElement("button");
    editButton.innerHTML = "edit";
    item.appendChild(editButton);

    let deleteButton = document.createElement("span");
    deleteButton.innerHTML = "\u00d7";
    item.appendChild(deleteButton);

    list.appendChild(item);

    editButton.addEventListener("click", () => {
      let newText = prompt("Edit task:", text.value);
      if (newText !== null) {
        item.innerHTML = newText;
        item.appendChild(deleteButton);
        item.appendChild(editButton);
        list.appendChild(item);

      }
    });

    deleteButton.addEventListener("click", () => {
      item.remove();
      item.appendChild(deleteButton);
      item.appendChild(editButton);

    });
  }
  text.value = '';
  save();
});


list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    save();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    save();
  }
}, false);
function save() {
  localStorage.setItem("data", list.innerHTML);
}
var count = 0;
var change = document.getElementById("change");
change.onclick = () => {
  if (count == 0) {
    document.body.classList.toggle("dark-theme");
    change.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6TxKuSscllwqjOG9lVkW47bMwwjfPOSKxQ&usqp=CAU";
    change.style.height = "50";
    count = 1;
    save();
  }
  else {
    document.body.classList.toggle("dark-theme");
    change.src = "data:image/png;base64,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";
    count = 0;
    save();
  }
};
function deleteall() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  save();
}
function complete() {
  while (list.lastChild) {
    if (list.firstChild.class == ".checked") {
      continue;
    }
    else {
      list.removeChild(list.firstChild);
    }
  }
  save();
}

function complete() {
  var listItems = list.getElementsByTagName('li');
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    if (listItem.classList.contains('checked')) {
      listItem.style.display = 'list-item';
    } else {
      listItem.style.display = 'none';
    }
  }
}
function incomplete() {
  var listItems = list.getElementsByTagName('li');
  for (var i = 0; i < listItems.length; i++) {
    var listItem = listItems[i];
    if (listItem.classList.contains('checked')) {
      listItem.style.display = 'none';
    } else {
      listItem.style.display = 'list-item';
    }
  }
}

var storedValue = localStorage.getItem("storedValue");
if (storedValue) {
  document.getElementById("displayData").innerText = storedValue + "'s";
}
else {
  document.getElementById("displayData").innerText = "MY";
}

document.getElementById("displayData").addEventListener("click", () => {
  let newText = prompt("Edit task:", text.value);
  if (newText.length > 10) {
    alert("please enter a name of below 10 characters");
  }
  else {
    document.getElementById("displayData").innerText = newText + "'s";
  }
});
var width = window.screen.width;
if (width <= 360) {
  list.style.marginLeft = "0px";
  var change = document.querySelector("#change");
  change.style.marginLeft = "5px";
  var combtn = document.querySelector("#combtn");
  var icombtn = document.querySelector("#icombtn");
  var delbtn = document.querySelector("#delbtn");
  combtn.innerText = "Comp";
  icombtn.innerText = "Incomp";
  delbtn.innerText = "DelAll";
  icombtn.style.margin = "10px";
}

function display() {
  list.innerHTML = localStorage.getItem("data");
}
display();



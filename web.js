let input = document.querySelector(".input-field");
let submit = document.querySelector(".add-todo");
let list = document.querySelector(".list");

submit.addEventListener('click', showValue);

function showValue() {
    let addedElement = document.createElement("div");
    addedElement.classList.add("list-element-container");

    addedElement.innerHTML = `
        <h5 class="list-element">${input.value}</h5>
        <button class="delete"><ion-icon name="trash"></ion-icon></button>
    `;

    list.appendChild(addedElement);


    let deleteButton = addedElement.querySelector(".delete");
    deleteButton.addEventListener('click', function() {
        addedElement.remove();
    });

    
    input.value = "";

    console.log(list);
}


console.log("This is Todo List app")
showList();
// Add Event listener
let button = document.getElementById("btn");
button.addEventListener('click', function(e) {
    let text = document.getElementById("txtarea");
    let list = localStorage.getItem("list");
    const listArr = (list && JSON.parse(list)) ?? []
    listArr.push(text.value);
    localStorage.setItem("list",JSON.stringify(listArr));
    text.value = "";
    console.log(listArr);
    showList();
})
function showList(){
    let list = localStorage.getItem("list");
    const listArr = (list && JSON.parse(list)) ?? []
    let html = "";
    listArr.forEach(function(element, index) {
        html += `
        <div class="listcard card m-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title font-monospace">${element}</h5>
          <button href="#" id="${index}" onclick="deleteList(this.id)" class="btn btn-outline-danger"><i class="far fa-trash-alt" style="user-select: auto;"></i></button>
        </div>
      </div>
      `
    });
    let listElm = document.getElementById('list');
    if (listArr.length != 0) {
        listElm.innerHTML = html;
    }
    else {
        listElm.innerHTML = `<p class="text-center fs-5 font-monospace text-secondary">Nothing to show! Update your To-Do list using "Add new To-Do" section.</p>`
    }
}
function deleteList(index) {
    let list = localStorage.getItem("list");
    const listArr = (list && JSON.parse(list)) ?? [];
    listArr.splice(index, 1);
    localStorage.setItem("list",JSON.stringify(listArr));
    showList();
}

// search = document.getElementById("search");
// search.addEventListener('input', () => {
//     let input = search.value.toLowerCase();
//     let card = document.getElementsByClassName("listcard");
//     Array.from(card).forEach((element) => {
//         let cardText = element.getElementsByTagName("h5")[0];
//         if (cardText.includes(input)) {
//             element.style.display = "block";
//         } else {
//             element.style.display = "none";
//         }
//     })
// })
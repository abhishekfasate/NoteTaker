console.log("hi abhi");
showNotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtxt.value = " ";
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += 
            `<div class="noteCard my-2 mx-2 card" style="width: 18rem; background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Ex90zDYs9hTFWZwLg93tgqUD3u5s_hi6Fg&usqp=CAU'); background-repeat: no-repeat; background-size: cover; border-radius: 20px; ;>
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text" style="color: white; font-size: large;">${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" style="border-radius:20px ;"  class="btn btn-danger" >Delete</button>
                    </div>                
                    </div>;`
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<h2><b>Nothing to show<br>Sorry!</b></h2> `;
    }
}



function deleteNote(index) {
    console.log("Delete...");
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}






let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    console.log('User input in search box');
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})








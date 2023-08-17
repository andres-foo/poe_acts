// Change act
const dropdown = document.getElementById('dropdown');
const acts = document.getElementsByClassName('act');
dropdown.onchange = function(){
    for(const act of acts) {
        act.style.display = "none";
    }
    document.getElementById(dropdown.value).style.display = "block"
}

// Create toggle
const contents = document.getElementsByClassName('content');
for(const content of contents) {
    content.addEventListener('click', function(){
        if(this.classList.contains("completed")) {
            this.classList.remove("completed")
        } else {
            this.classList.add("completed")
        }
    });
}
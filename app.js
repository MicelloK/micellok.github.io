// contact form

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    const parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    const parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

const toggleThemeBtn = document.getElementById("theme");
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})
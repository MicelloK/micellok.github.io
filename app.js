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

//dark theme button

const toggleThemeBtn = document.getElementById("theme");
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})

// lang buttons 

const resultContainer = document.querySelector("main");

const plBtn = document.getElementById("pl");
plBtn.addEventListener("click", async function() {
    try {
        let response = await fetch('index_pl.html');
        let data = await response.text();

        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
        let mainElement = tempDiv.querySelector("main");

        if (mainElement) {
            resultContainer.innerHTML = mainElement.innerHTML;
        } else {
            console.error('Main section error');
        }
    } catch (error) {
        console.error('Render page error:', error);
    }
})

const enBtn = document.getElementById("en");
enBtn.addEventListener("click", async function() {
    try {
        let response = await fetch('index.html');
        let data = await response.text();

        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
        let mainElement = tempDiv.querySelector("main");

        if (mainElement) {
            resultContainer.innerHTML = mainElement.innerHTML;
        } else {
            console.error('Main section error');
        }
    } catch (error) {
        console.error('Render page error:', error);
    }
})

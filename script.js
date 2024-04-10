// loader
var myVar;
        
    function myFunction() {
        myVar = setTimeout(showPage, 1500);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "flex";
        document.getElementById("darkModeSwitch").style.display = "flex";
    }

// dark-mode
let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#darkModeSwitch')

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null)
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

function darkmode() {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}
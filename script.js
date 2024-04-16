// loader
var myVar;

function loader() {
    myVar = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("bg-ellipse").style.display = "block";
    document.getElementById("bg-ellipse2").style.display = "block";
    document.getElementById("mainContainer").style.display = "flex";
}

/* dark-mode
let darkMode = localStorage.getItem('darkMode')

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
}*/
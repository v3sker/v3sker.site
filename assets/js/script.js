// loader

let loaderTimeout;
let writerTimeout;
let firstTime = localStorage.getItem('firstTime')

function loader() {
  if (firstTime === null) {
    localStorage.setItem('firstTime', 0)
    loaderTimeout = setTimeout(showPage, 3000)
  } else {
    showPage()
  }
}

function showPage() {
  document.getElementById("loader").style.display = "none"
  document.getElementById("bg-ellipse").style.display = "block"
  document.getElementById("bg-ellipse2").style.display = "block"
  document.getElementById("mainContainer").style.display = "flex"
  writing()
}

// VERY hardcoded hero text

const textContainer = document.querySelector('#textWriter')

async function writing() {
  const interval = 50
  const text = ["T","h","i","s"," p","a","g","e"," i","s"," p","r","e","t","t","y"," e","m","p","t","y",
                "","",".","","",".","","","","","","",
                " J","u","s","t"," f","o","r"," n","o","w",
                "","",".","","",".","","","","","","",
                " I"," w","i","s","h."]
  
  for (i = 0; i < text.length; i++) {
    textContainer.innerText += text[i]
    await new Promise(resolve => setTimeout(resolve, interval));
  }
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
/*--------------------------Switch Toggle Button -------------------------*/
const styleSwitcher = () => {
  const switchBtn = document.querySelector(".switcher-toggle");
  const switchBody = document.querySelector(".switcher-body");

  const switchToggle = () => {
    switchBody.classList.toggle("open");
    switchBtn.classList.toggle("hide");
  };

  switchBtn.addEventListener("click", () => {
    switchToggle();
  });

  // switch toggle body hide whenever we click on out side the this box
  document.body.addEventListener("click", (e) => {
    if (
      switchBody.classList.contains("open") &&
      !switchBody.contains(e.target) &&
      !switchBtn.contains(e.target)
    ) {
      switchToggle();
    }
  });
};

styleSwitcher();

/*--------------------Dark Theme Toggle -------------------------------- */
const darkTheme = () => {
  const darkMode = document.querySelector("#dark-mode");

  const theme = () => {
    if (localStorage.getItem("dark-theme") === "true") {
      document.body.classList.add("dark");
      darkMode.checked = true;
    } else {
      document.body.classList.remove("dark");
      darkMode.checked = false;
    }
  };

  theme(); // Set the initial theme mode based on localStorage

  darkMode.addEventListener("click", () => {
    // Set user prefences in localStorage
    localStorage.setItem("dark-theme", darkMode.checked);
    theme();
  });
};

darkTheme();

/* -----------------------------Main Theme Colors -----------------------*/

const colorTheme = () => {
  const colorPicker = document.querySelector(".color");
  const html = document.querySelector("html");

  const setHue = (value) => {
    html.style.setProperty("--hue", value);
  };

  if (localStorage.getItem("--hue") !== null) {
    setHue(parseInt(localStorage.getItem("--hue")));
  } else {
    const hue = parseInt(getComputedStyle(html).getPropertyValue("--hue"));
    setHue(hue);
  }

  colorPicker.addEventListener("click", (e) => {
    if (e.target.classList.contains("color-pick")) {
      let data = e.target.getAttribute("data-target");
      setHue(data);

      // Set user preferences in localStorage
      localStorage.setItem("--hue", data);
    }
  });
};

colorTheme(); // Set the initial theme color based on localStorage

// preloader 
window.addEventListener("load", () => {
  // preloader
  const preloader = document.querySelector(".js-preloader");
  preloader.classList.add("fade-out");

  setTimeout(() => {
    preloader.style.display = "none";
    // Animation On Scroll
    AOS.init();
  }, 1000);
});

/*-------------------------Typie Writer Animation ---------------------- */
const typingProgess = () => {
  const getName = document.querySelector(".js-dynamic-name");
  const dynamic_names = ["web designer", "web developer"];

  const typingLoad = () => {
    setTimeout(() => {
      getName.innerHTML = dynamic_names[0];
    }, 0);

    setTimeout(() => {
      getName.innerHTML = dynamic_names[1];
    }, 4000);
  };
  typingLoad();

  setInterval(typingLoad, 8000);
};

typingProgess();

/*---------------- Navmenu and Nav Toggle animation ------------- */
const navigationToggle = () => {
  const navToggle = document.querySelector(".js-nav-toggle");
  const header = document.querySelector("header");
  const nav = document.querySelector(".js-nav");

  // open menu bar
  const menuBar = () => {
    header.classList.toggle("active");
  };

  navToggle.addEventListener("click", () => {
    menuBar();
  });

  // acrive navlink
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("nav-link") &&
      !e.target.classList.contains("active")
    ) {
      nav.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
    } else if (e.target.classList.contains("section-link")) {
      let target = e.target.getAttribute("data-target");
      nav.querySelector(".active").classList.remove("active");
      nav.querySelector(target).classList.add("active");
    }
  });

  /*-------------------------- Active section ------------------------*/
  const activeSection = (val) => {
    document.querySelector("section.active").classList.remove("active");
    document.querySelector(".bg-overlay").classList.add("active");

    setTimeout(() => {
      document.querySelector(".bg-overlay").classList.remove("active");
      document.querySelector(".main").classList.remove("fade-out");
      document.querySelector(val).classList.add("active");
    }, 200);
  };


  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("section-link") && e.target.hash !== "") {
      activeSection(e.target.hash);
      if (header.classList.contains("active")) {
        menuBar();
      }
    }
  });
};

navigationToggle();

/*------------------- About Tab ----------------- */
const aboutTabs = () => {
  const tabBtn = document.querySelector(".js-tabs");
  const tabSection = document.querySelector(".js-tab-section");

  // open tab
  const openTab = (val) => {
    tabSection.querySelector(".active").classList.remove("active");
    document.querySelector(val).classList.add("active");
  };

  // tab active
  const activeTab = (val) => {
    tabBtn.querySelector(".active").classList.remove("active");
    val.classList.add("active");
  };

  tabBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab")) {
      activeTab(e.target);
      // get data targte atribute
      let target = e.target.getAttribute("data-target");
      openTab(target);
    }
  });
};
aboutTabs();

// Portfolo item pop up
const portfolioPopUp = () => {
  const popUp = document.querySelector(".js-popup");
  const popUpContent = document.querySelector(".js-popup-content");

  // open popup
  const openPopUp = () => {
    popUp.classList.add("open");
  };

  // close popup
  const closePopup = () => {
    popUp.classList.remove("open");
  };

  // pop deatail
  const popUpDetail = (val) => {
    console.log(val);
    popUpContent.querySelector(".img1").src = val.querySelector(".img1").src;
    popUpContent.querySelector(".img2").src = val.querySelector(".img2").src;
    popUpContent.querySelector(".img3").src = val.querySelector(".img3").src;
    popUpContent.querySelector(".portfolio-body").innerHTML =
      val.querySelector(".portfolio-body").innerHTML;
  };

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-btn")) {
      openPopUp();
      let detail = e.target.parentElement;
      popUpDetail(detail);
    }
  });

  document.querySelector(".js-pop-close").addEventListener("click", () => {
    closePopup();
  });

  document.body.addEventListener("click", (e) => {
    if (
      popUp.classList.contains("open") &&
      !popUpContent.contains(e.target) &&
      !document.querySelector(".style-switcher").contains(e.target)
    ) {
      closePopup();
    }
  });
};

portfolioPopUp();

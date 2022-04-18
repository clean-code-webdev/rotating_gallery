class ElementMaker {
  makeIcons() {
    const parent = document.querySelector("#parent");
    const icons = [
      "pinterest-p",
      "snapchat",
      "linkedin-in",
      "youtube",
      "instagram",
      "tiktok",
      "discord",
      "twitter",
    ];

    icons.forEach((icon) => {
      parent.innerHTML += `
              <div class="children">
                <i class="fa-brands fa-${icon} icon"></i>
              </div>`;
    });
  }
}

class ElementStyler {
  colorChildrenBg() {
    const children = document.querySelectorAll(".children");
    const backgroundColos = [
      "98fdff",
      "f898ff",
      "ff72b2",
      "bd83ff",
      "ff7272",
      "98d1ff",
      "ffe850",
      "98ffcd",
    ];

    children.forEach((child, i) => {
      child.style.background = `#${backgroundColos[i]}`;
    });
  }

  colorChildrenBorder() {
    const children = document.querySelectorAll(".children");

    const borderColors = [
      "00fbff",
      "ee00ff",
      "ff0073",
      "7700ff",
      "ff0000",
      "008cff",
      "ffdd00",
      "00ff84",
    ];

    children.forEach((child, i) => {
      child.style.borderColors = `0.3rem solid #${borderColors[i]}`;
    });
  }
}

class Sound {
  constructor() {
    this.isSoundOn = false;
  }

  togglePlaySound() {
    this.isSoundOn = this.isSoundOn ? false : true;
  }

  toggleSound() {
    const soundControls = document.querySelector("#sound");

    soundControls.addEventListener("click", () => {
      const soundOff = soundControls.querySelector("#off");
      const soundOn = soundControls.querySelector("#on");

      soundOff.style.display = this.isSoundOn ? "block" : "none";
      soundOn.style.display = this.isSoundOn ? "none" : "block";

      this.togglePlaySound();
    });
  }

  playToggleSound() {
    const children = document.querySelectorAll(".children");

    children.forEach((child) => [
      child.addEventListener("mouseenter", () => {
        if (!this.isSoundOn) return;

        const audio = new Audio("./media/toggle.mp3");
        audio.play();
      }),
    ]);
  }
}

const elemMaker = new ElementMaker();
elemMaker.makeIcons();

const elemStyler = new ElementStyler();
elemStyler.colorChildrenBg();
elemStyler.colorChildrenBorder();

const sound = new Sound();
sound.toggleSound();
sound.playToggleSound();

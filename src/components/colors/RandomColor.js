class RandomColor {
  interval = null;
  colors = {
    primary: "",
    primary_varient: "",
    bg: "",
    bg_varient: ""
  }

  constructor() {
    this.interval = setInterval(() => { this.updateColor() }, 1500);
    window.addEventListener("keypress", this.handleSpace);
  }

  getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  handleSpace = (event) => {
    if (event.keyCode === 32 && !event.repeat) {
      if (this.interval !== null) {
        clearInterval(this.interval);
        this.interval = null;
        // this.printColor()
      }
      else {
        clearInterval(this.interval);
        this.interval = setInterval(() => { this.updateColor() }, 1500);
      }
    }
    else if (event.keyCode === 9 && event.ctrlKey) {
      this.printColor()
    }
  }
  updateColor = () => {
    this.colors.primary = this.getRandomColor();
    this.colors.primary_varient = this.getRandomColor();
    this.colors.bg = this.getRandomColor();
    // this.colors.bg="#7B1741";
    this.colors.bg_varient = this.getRandomColor();
    document.body.style.setProperty("--color-bg", this.colors.bg);
    document.body.style.setProperty("--color-primary", this.colors.primary);
    document.body.style.setProperty("--color-primary-varient", this.colors.primary_varient);
    document.body.style.setProperty("--color-bg-varient", this.colors.bg_varient);
  }
  printColor = () => {
    console.log("Colors: " + JSON.stringify(this.colors));
  }
}

export default RandomColor;

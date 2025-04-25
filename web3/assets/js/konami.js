class Konami {
  constructor(callback) {
    this.code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    this.position = 0;
    this.callback = callback;
    this.init();
  }

  init() {
    document.addEventListener('keydown', this.checkSequence.bind(this));
  }

  checkSequence(e) {
    if (e.keyCode === this.code[this.position]) {
      this.position++;
      if (this.position === this.code.length) {
        this.callback();
        this.position = 0;
      }
    } else {
      this.position = 0;
    }
  }

  disable() {
    document.removeEventListener('keydown', this.checkSequence);
  }
}

export default Konami;
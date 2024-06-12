class myhome {
  constructor(food, study, furniture) {
    this.food = food;
    this.study = study;
    this.furniture = furniture;
  }

  get food() {
    return this._food;
  }

  set food(newfood) {
    if (typeof newfood === "object") {
      this._food = newfood;
    } else {
      throw new Error(newfood + "에 문제 발생 확인해봐.");
    }
  }

  get study() {
    return this._study;
  }

  set study(newstudy) {
    if (typeof newstudy === "object") {
      this._study = newstudy;
    } else {
      throw new Error(newstudy + "에 문제 발생 확인해봐.");
    }
  }

  get furniture() {
    return this._furniture;
  }

  set furniture(newfurniture) {
    if (typeof newfurniture === "object") {
      this._furniture = newfurniture;
    } else {
      throw new Error(newfurniture + "에 문제 발생 확인해봐.");
    }
  }
}

module.exports = myhome;

class PrimoPacco {
  constructor(msg) {
    this.msg = msg;
  }

  dire() {
    console.log(this.msg);
  }

  set msg(msg) {
    this._msg = msg;
  }
  get msg() {
    return this._msg;
  }
}

module.exports = PrimoPacco;

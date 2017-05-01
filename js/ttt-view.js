class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    const $ul = $("<ul>");
    for (let rowId = 0; rowId < 3; rowId++) {
      for (let colId = 0; colId < 3; colId++) {
        let $li = $("<li>");
        $li.data("pos", [rowId, colId])
        $ul.append($li);
      }
    }
    this.el.append($ul);
  }
}

module.exports = View;

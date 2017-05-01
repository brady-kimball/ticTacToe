class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.el.on("click", "li", ((event) => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    const currentPlayer = this.game.currentPlayer;
    const pos = $square.data("pos");
    try {
      this.game.playMove(pos);
    }
    catch(err) {
      alert("Invalid move!");
      return;
    }
    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      this.el.off('click');
      this.el.addClass('game-over')
      const $figcaption = $("<figcaption>");
      if (this.game.winner()) {
        const winner = this.game.winner();
        this.el.addClass(`winner-${winner}`)
        $figcaption.html(`Winner is ${winner}!`);
      }
      this.el.append($figcaption);
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("group")
    for (let rowId = 0; rowId < 3; rowId++) {
      for (let colId = 0; colId < 3; colId++) {
        let $li = $("<li>");
        $li.data("pos", [rowId, colId]);
        $ul.append($li);
      }
    }
    this.el.append($ul);
  }
}

module.exports = View;

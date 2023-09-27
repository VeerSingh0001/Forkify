class SearchView {
  _parentEl = document.querySelector(".search");

  getQuery() {
    const query =  this._parentEl.querySelector(".search__field").value;
    
    this.#clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  #clearInput() {
    this._parentEl.querySelector(".search__field").value = "";
  }
}

export default new SearchView();

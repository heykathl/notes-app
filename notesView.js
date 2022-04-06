class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector("#main-container");
    this.addButton = document.querySelector("#add-button");
    this.addButton.addEventListener("click", () => {
      const inputField = document.querySelector("#message-input");
      console.log(inputField.value)
      this.addNote(inputField.value);
      // inputField.value = "";
    });
  }

  getModel() {
    return this.model;
  }

  addNote(note) {
    // this.model.addNote(note)
    this.api.createNote(note);
    this.displayNotes();
  }

  displayNotes() {
    const clearNotes = document.querySelectorAll(".note");
    clearNotes.forEach((note) => note.remove());

    this.api.loadNotes((notes) => {
      this.model.setNotes(notes);
    });
    console.log("running");
    console.log(this.model.getNotes());
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const div = document.createElement("div");
      div.innerText = note;
      div.classList.add("note");
      document.querySelector("#main-container").append(div);
    });
  }
}

module.exports = NotesView;

class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector("#main-container");
    this.addButton = document.querySelector("#add-button");
    this.addButton.addEventListener("click", () => {
      const inputField = document.querySelector("#message-input");
      // console.log(inputField.value);
      this.addNote(inputField.value, () => {
        inputField.value = "";
      });
    });
  }

  getModel() {
    return this.model;
  }

  async addNote(note, callback) {
    // this.model.addNote(note)
    // console.log(note)
    await this.api.createNote(note, () => {});
    callback();
    this.displayNotes();
  }

  async displayNotes() {
    const clearNotes = document.querySelectorAll(".note");
    clearNotes.forEach((note) => note.remove());

    const serverNotes = await this.api.loadNotes(() => {
      this.displayError()
    });
    this.model.setNotes(serverNotes);
    console.log(serverNotes)
    const notes = this.model.getNotes();
    console.log(notes)
    notes.forEach((note) => {
      // console.log(note)
      const div = document.createElement("div");
      div.innerText = note;
      div.classList.add("note");
      document.querySelector("#main-container").append(div);
    });
  }

  displayError() {
    document.write("Oopsie")
  }
}

module.exports = NotesView;

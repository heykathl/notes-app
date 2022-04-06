(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model) {
          this.model = model;
          this.mainContainerEl = document.querySelector("#main-container");
          this.addButton = document.querySelector("#add-button");
          this.addButton.addEventListener("click", () => {
            this.displayNotes();
          });
        }
        getModel() {
          return this.model;
        }
        displayNotes() {
          const inputField = document.querySelector("#message-input");
          this.model.addNote(inputField.value);
          const notes = this.model.getNotes();
          const note = notes[notes.length - 1];
          const div = document.createElement("div");
          div.innerText = note;
          div.classList.add("note");
          document.querySelector("#main-container").append(div);
          inputField.value = "";
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // index.js
  console.log("The notes app is running");
  var NotesView = require_notesView();
  var NotesModel = require_notesModel();
  var notesModel = new NotesModel();
  console.log(notesModel.getNotes());
  var notesView = new NotesView(notesModel);
  notesView.displayNotes();
})();

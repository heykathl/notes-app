(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            return callback(data);
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model, api) {
          this.model = model;
          this.api = api;
          this.mainContainerEl = document.querySelector("#main-container");
          this.addButton = document.querySelector("#add-button");
          this.addButton.addEventListener("click", () => {
            const inputField = document.querySelector("#message-input");
            this.addNote(inputField.value);
            inputField.value = "";
          });
        }
        getModel() {
          return this.model;
        }
        addNote(note) {
          this.model.addNote(note);
          this.displayNotes();
        }
        displayNotes() {
          const clearNotes = document.querySelectorAll(".note");
          clearNotes.forEach((note) => note.remove());
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const div = document.createElement("div");
            div.innerText = note;
            div.classList.add("note");
            document.querySelector("#main-container").append(div);
          });
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
        setNotes(notes) {
          this.notes = notes;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // index.js
  var NotesApi = require_notesApi();
  var NotesView = require_notesView();
  var NotesModel = require_notesModel();
  var notesApi = new NotesApi();
  var notesModel = new NotesModel();
  var notesView = new NotesView(notesModel, notesApi);
  notesApi.loadNotes((notes) => {
    notesModel.setNotes(notes);
    console.log(notes);
    notesView.displayNotes();
  });
})();

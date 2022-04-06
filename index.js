const NotesApi = require('./notesApi')
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')

const notesApi = new NotesApi();
const notesModel = new NotesModel();
const notesView = new NotesView(notesModel, notesApi);

notesApi.loadNotes((notes) => {
  notesModel.setNotes(notes);
  console.log(notes)
  notesView.displayNotes();
})

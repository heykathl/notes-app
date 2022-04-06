 /**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

let notesView;
let notesModel;

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync('./index.html');
  notesModel = new NotesModel();
  notesView = new NotesView(notesModel);
});

describe("notesView", () => {

  it("starts with a list of empty notes" , () => {
    expect(notesView.getModel().getNotes()).toEqual([])
  });

  it("adds a note from notesView", () => {
    notesView.getModel().addNote("HELLO");
    expect(notesView.getModel().getNotes()).toEqual(["HELLO"])
  });

  it("displays the stored notes", () => {
    // document.body.innerHTML = fs.readFileSync('./index.html');
    notesModel.addNote("HELLO");
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(1);
  });

  it('adds a note to the model with text', () => {
    const inputField = document.querySelector('#message-input')
    inputField.value = 'hey'
    const addButton = document.querySelector('#add-button')
    addButton.click()
    expect(document.querySelector('.note').innerText).toBe("hey")
  });

  it('clears input field when add note button is clicked', () => {
    const inputField = document.querySelector('#message-input')
    inputField.value = 'hey'
    const addButton = document.querySelector('#add-button')
    addButton.click()
    expect(document.querySelector('#message-input').value).toBe("")
  })

  
})


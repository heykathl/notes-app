/**
 * @jest-environment jsdom
 */
require("jest-fetch-mock").enableMocks();
const fs = require("fs");
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");
const NotesApi = require("./notesApi");

let notesView;
let notesModel;
let notesApi;

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
  notesModel = new NotesModel();
  mockApi = {
    createNote: () => ["hello"],
    loadNotes: () => ["hello"],
  };
  notesView = new NotesView(notesModel, mockApi);
});

describe("notesView", () => {
  it("starts with a list of empty notes", () => {
    expect(notesView.getModel().getNotes()).toEqual([]);
  });

  it("adds a note from notesView", () => {
    notesModel.addNote("HELLO");
    expect(notesModel.getNotes()).toEqual(["HELLO"]);
  });

  it("displays the stored notes", async() => {
    await notesView.addNote("Hi friends", () => {});
    expect(document.querySelectorAll(".note").length).toBe(1);
  });

  it("adds a note to the model with text", async () => {
    const inputField = document.querySelector("#message-input");
    inputField.value = "hello";
    const addButton = document.querySelector("#add-button");
    addButton.click();
    setTimeout(() => {expect(document.querySelector(".note")).toBe("hello")}, 0);
  });

  it("clears input field when add note button is clicked", () => {
    const inputField = document.querySelector("#message-input");
    inputField.value = "hello";
    const addButton = document.querySelector("#add-button");
    addButton.click();
    setTimeout(() => {expect(document.querySelector("#message-input").value).toBe("")}
  );
});


});

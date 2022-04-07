const NotesApi = require("./notesApi");

require("jest-fetch-mock").enableMocks();

describe("Notes Api Class", () => {
  it("calls fetch and loads list of notes", async () => {
    const notesApi = new NotesApi();
    fetch.mockResponse(
      JSON.stringify({
        0: "Hi friends",
      })
    );

    notesApi.loadNotes((notes) => {
      expect(notes[0]).toEqual("Hi friends");
    });
  });

  it("creates a new note with a POST request", (done) => {
    const notesApi = new NotesApi();

    fetch.mockResponse(async (request) => {
      try {
        expect(request.method).toBe("POST");
        const sentRequestBody = await request.json();
        expect(sentRequestBody).toEqual({ content: "Hi friends" });
      } catch (error) {
        done(error);
      }

      return JSON.stringify({
        0: "Hi friends",
      });
    });

    notesApi.createNote("Hi friends", (response) => {
      expect(response[0]).toBe("Hi friends");

      done();
    });
  });
});
class NotesApi {
  async loadNotes(callback) {
    try {
      const response = await fetch("http://localhost:3000/notes")
      return response.json()
    } catch (e) {
      console.log(e)
      callback()
    }
      // .then((response) => response.json())
      // .then((data) => {
      //   return callback(data);
      // });
  }

  async createNote(note, callback) {
    await fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: note }),
    })
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }
}

module.exports = NotesApi;

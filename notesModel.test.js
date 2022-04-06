const NotesModel = require('./notesModel')

let notesModel;

beforeEach(() => {
    notesModel = new NotesModel();
});
describe('notes tests', () => {

    it('returns an empty array', () => {
        // const notesModel = new NotesModel()
        expect(notesModel.getNotes()).toEqual([])
    })
    it('adds a note and displays it', () => {
        notesModel.addNote('Buy milk')
        expect(notesModel.getNotes()).toEqual(['Buy milk'])
    })
    it('resets the stored notes', () => {
        notesModel.addNote('Buy milk')
        notesModel.reset()
        expect(notesModel.getNotes()).toEqual([])
    })

    it('set the notes to the result of the api', () => {
        
    })
})
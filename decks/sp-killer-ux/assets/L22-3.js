c.updateNote = function(updateType) {
  c.server.get({
    action: 'updateNote',
    noteID: c.data.noteID,
    noteBody: c.data.note,
    noteTitle: c.data.title
  }).then(function(r) {
  });
}

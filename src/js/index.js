const electron = require('electron')

var editor = ace.edit("editor")

fontStyle = document.getElementById('editor').style

//setting theme
settings.watch('editor.theme', function(newValue, oldValue) {
  editor.setTheme(newValue)
})

//setting Font Size
settings.watch('editor.fontSize', function(newValue, oldValue) {
  console.log(newValue)
  fontStyle.fontSize = newValue
})

//setting tab size
settings.watch('editor.tabSize', function(newValue, oldValue) {
  editor.session.setTabSize(newValue)
})

//setting tabs or spaces
settings.watch('editor.softTabs', function(newValue, oldValue) {
  editor.session.setUseSoftTabs(newValue)
})

//setting highlight current line
settings.watch('editor.highlightActiveLine', function(newValue, oldValue) {
  editor.setHighlightActiveLine(newValue)
})

//setting language mode change
settings.watch('editor.mode', function(newValue, oldValue) {
  editor.session.setMode(newValue)
})
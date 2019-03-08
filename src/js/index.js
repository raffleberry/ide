const electron = require('electron')

var editor = ace.edit("editor")

fontStyle = document.getElementById('editor').style

settings.watch('editor.theme', function(newValue, oldValue) {
  editor.setTheme(newValue)
})

//setting Font Size
settings.watch('editor.fontSize', function(newValue, oldValue) {
  fontStyle.fontSize = newValue + "px";
})

//setting language mode change
settings.watch('editor.mode', function(newValue, oldValue) {
  editor.session.setMode(newValue)
})
const ipc = require('electron').ipcRenderer

var editor = ace.edit("editor")

var execute = document.getElementById("execute")

var fontStyle = document.getElementById('editor').style
var output = document.getElementById('prog-output')
var input = document.getElementById('prog-input')
var response = document.getElementById('response')

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
settings.watch('editor.aceMode', function(newValue, oldValue) {
  editor.session.setMode(newValue)

})

ipc.on('output', function(event, arg) {
  if (arg[1] == 1) {
    response.textContent = "stderr";
  } else {
    response.textContent = "stdout";
  }
  output.value = arg[0]
  execute.disabled = false
})

execute.addEventListener('click', function() {
  output.value = "";
  var code = editor.getSession().getValue()
  execute.disabled = true
  arg = [code, input.value, settings.get('editor.modeVal')]
  ipc.send('execute', arg)
})
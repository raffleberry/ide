var editor = ace.edit("editor");
const settings = require('electron-settings')

/*
setx.set('editor', {
    theme: "ace/theme/xcode",
    mode: "ace/mode/c_cpp",
    tabSize: 2,
    softTabs: true,
    highlightActiveLine: true,
    fontSize: 16
  }
)
*/

editor.setTheme(settings.get('editor.theme'));
editor.session.setMode(settings.get('editor.mode'));
editor.setAutoScrollEditorIntoView(true);
editor.session.setTabSize(settings.get('editor.tabSize'));
editor.session.setUseSoftTabs(settings.get('editor.softTabs'));
editor.setHighlightActiveLine(settings.get('editor.highlightActiveLine'));
document.getElementById('editor').style.fontSize = String(settings.get('editor.fontSize'))+'px';
/*
use these details to set electron-settings on first run
or
lots of shit WILL GO WRONG
*/
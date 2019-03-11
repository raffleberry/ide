var editor = ace.edit("editor");
const settings = require('electron').remote.require('electron-settings');

/*
settings.set('editor', {
    theme: "ace/theme/xcode",
    mode: "ace/mode/c_cpp",
    modeVal: "5",
    tabSize: 2,
    softTabs: true,
    highlightActiveLine: true,
    fontSize: "16px"
  }
)
*/

/*
use these details to set electron-settings on first run
or
lots of shit WILL GO WRONG
*/

//editor-setup on startup
editor.setTheme(settings.get('editor.theme'));
editor.session.setMode(settings.get('editor.aceMode'));
editor.setAutoScrollEditorIntoView(true);
editor.session.setTabSize(settings.get('editor.tabSize'));
editor.session.setUseSoftTabs(settings.get('editor.softTabs'));
editor.setHighlightActiveLine(settings.get('editor.highlightActiveLine'));
document.getElementById('editor').style.fontSize = settings.get('editor.fontSize');

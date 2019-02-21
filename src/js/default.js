var editor = ace.edit("editor");
editor.setTheme("ace/theme/xcode");
editor.session.setMode("ace/mode/c_cpp");
editor.setAutoScrollEditorIntoView(true);
editor.session.setTabSize(2);
editor.session.setUseSoftTabs(true);
editor.setHighlightActiveLine(true);
document.getElementById('editor').style.fontSize='1em';
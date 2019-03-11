/* DONT MIND ME: START */
var themes = [
  ["ace/theme/gob", "Gob"],
  ["ace/theme/dawn", "Dawn"],
  ["ace/theme/chaos", "Chaos"],
  ["ace/theme/xcode", "Xcode"],
  ["ace/theme/chrome", "Chrome"],
  ["ace/theme/clouds", "Clouds"],
  ["ace/theme/cobalt", "Cobalt"],
  ["ace/theme/github", "Github"],
  ["ace/theme/kuroir", "Kuroir"],
  ["ace/theme/dracula", "Dracula"],
  ["ace/theme/eclipse", "Eclipse"],
  ["ace/theme/gruvbox", "Gruvbox"],
  ["ace/theme/monokai", "Monokai"],
  ["ace/theme/ambiance", "Ambiance"],
  ["ace/theme/iplastic", "iPlastic"],
  ["ace/theme/kr_theme", "KR_theme"],
  ["ace/theme/terminal", "Terminal"],
  ["ace/theme/textmate", "Textmate"],
  ["ace/theme/tomorrow", "Tomorrow"],
  ["ace/theme/twilight", "Twilight"],
  ["ace/theme/merbivore", "Merbivore"],
  ["ace/theme/sqlserver", "SQLserver"],
  ["ace/theme/dreamweaver", "Dreamweaver"],
  ["ace/theme/katzenmilch", "Karzenmilch"],
  ["ace/theme/vibrant_ink", "Vibrant Ink"],
  ["ace/theme/idle_fingers", "Idle Fingers"],
  ["ace/theme/crimson_editor", "Crimson Editor"],
  ["ace/theme/merbivore_soft", "Merbivore Soft"],
  ["ace/theme/pastel_on_dark", "Pastel on Dark"],
  ["ace/theme/solarized_dark", "Solarized Dark"],
  ["ace/theme/tomorrow_night", "Tomorrow Night"],
  ["ace/theme/clouds_midnight", "Clouds Midnight"],
  ["ace/theme/mono_industrial", "Mono Industrial"],
  ["ace/theme/solarized_light", "Solarized Light"],
  ["ace/theme/tomorrow_night_blue", "Tomorrow Night Blue"],
  ["ace/theme/tomorrow_night_bright", "Tommorow Night Bright"],
  ["ace/theme/tomorrow_night_eighties", "Tomorrow Night Eighties"]
]

var modes = [
  ["ace/mode/ada", "ADA", "39"],
  ["ace/mode/c_cpp", "C (clang)", "26"],
  ["ace/mode/c_cpp", "C (gcc)", "6"],
  ["ace/mode/c_cpp", "C (vc)", "29"],
  ["ace/mode/csharp", "C#", "1"],
  ["ace/mode/c_cpp", "C++ (clang)", "27"],
  ["ace/mode/c_cpp", "C++ (gcc)", "7"],
  ["ace/mode/c_cpp", "C++ (vc++)", "28"],
  ["ace/mode/d", "D", "30"],
  ["ace/mode/elixir", "Elixir", "41"],
  ["ace/mode/erlang", "Erlang", "40"],
  ["ace/mode/fortran", "Fortran", "45"],
  ["ace/mode/fsharp", "F#", "3"],
  ["ace/mode/golang", "Go", "20"],
  ["ace/mode/haskell", "Haskell", "11"],
  ["ace/mode/java", "Java", "4"],
  ["ace/mode/javascript", "JavaScript", "17"],
  ["ace/mode/kotlin", "Kotlin", "43"],
  ["ace/mode/lisp", "Lisp", "18"],
  ["ace/mode/lua", "Lua", "14"],
  ["ace/mode/mysql", "MySQL", "33"],
  ["ace/mode/javascript", "Node.js", "23"],
  ["ace/mode/objectivec", "ObjectiveC", "10"],
  ["ace/mode/ocaml", "OCaml", "42"],
  ["ace/mode/pascal", "Pascal", "9"],
  ["ace/mode/perl", "Perl", "13"],
  ["ace/mode/php", "PHP", "8"],
  ["ace/mode/prolog", "Prolog", "19"],
  ["ace/mode/python", "Python 2", "5"],
  ["ace/mode/python", "Python 3", "24"],
  ["ace/mode/r", "R", "31"],
  ["ace/mode/ruby", "Ruby", "12"],
  ["ace/mode/scala", "Scala", "21"],
  ["ace/mode/scheme", "Scheme", "22"],
  ["ace/mode/sqlserver", "SQLServer", "16"],
  ["ace/mode/swift", "Swift", "37"],
  ["ace/mode/tcl", "Tcl", "32"],
]

/* DONT MIND ME: END */

const electron = require('electron')
const ipc = electron.ipcRenderer
const settings = require('electron').remote.require('electron-settings');

var themeSelector = document.getElementById('themeSelector')
var fontSelector = document.getElementById('fontSelector')
var modeSelector = document.getElementById('modeSelector')
var tabSizeSelector = document.getElementById('tabSizeSelector')
var softTabsCheckbox = document.getElementById('softTabs')
var highlightLineCheckbox = document.getElementById('highlightLine')

/* variables */
var options = null
var option = null

/* adding themes to the list : START */

options = []
option = document.createElement('option')

for (var i = 0; i < themes.length; i++) {
  option.text = themes[i][1]
  option.value = themes[i][0]
  options.push(option.outerHTML)
}

themeSelector.insertAdjacentHTML('beforeEnd', options.join('\n'))

options = null
option = null

/* adding themes to the theme list : END */

/* adding modes to the list : START */

options = []
option = document.createElement('option')

for (var i in modes) {
  option.text = modes[i][1]
  option.value = modes[i][0]
  options.push(option.outerHTML)
}

modeSelector.insertAdjacentHTML('beforeEnd', options.join('\n'))

options = null
option = null

/* adding modes to the theme list : END */

fontSelector.value = String(settings.get('editor.fontSize')).split('px')[0]
themeSelector.value = settings.get('editor.theme')
modeSelector.selectedIndex = settings.get('editor.mode')
tabSizeSelector.value = settings.get('editor.tabSize')
softTabsCheckbox.checked = settings.get('editor.softTabs')
highlightLineCheckbox.checked = settings.get('editor.highlightActiveLine')

themeSelector.addEventListener('change', function() {
  settings.set('editor.theme', String(themeSelector.value))
})

fontSelector.addEventListener('change', function() {
  console.log(String(fontSelector.value) + 'px')
  settings.set('editor.fontSize', String(fontSelector.value) + 'px')
})

tabSizeSelector.addEventListener('change', function() {
  settings.set('editor.tabSize', Number(tabSizeSelector.value))
})

softTabsCheckbox.addEventListener('change', function() {
  settings.set('editor.softTabs', softTabsCheckbox.checked)
})


highlightLineCheckbox.addEventListener('change', function () {
  settings.set('editor.highlightActiveLine', highlightLineCheckbox.checked)
})

modeSelector.addEventListener('change', function() {
  settings.set('editor.modeVal', modes[modeSelector.selectedIndex][2])
  settings.set('editor.mode', modeSelector.selectedIndex)
  settings.set('editor.aceMode', modeSelector.value)
})
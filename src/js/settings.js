/* DONT MIND ME: START */
var themes = [
  "ace/theme/gob",
  "ace/theme/dawn",
  "ace/theme/chaos",
  "ace/theme/xcode",
  "ace/theme/chrome",
  "ace/theme/clouds",
  "ace/theme/cobalt",
  "ace/theme/github",
  "ace/theme/kuroir",
  "ace/theme/dracula",
  "ace/theme/eclipse",
  "ace/theme/gruvbox",
  "ace/theme/monokai",
  "ace/theme/ambiance",
  "ace/theme/iplastic",
  "ace/theme/kr_theme",
  "ace/theme/terminal",
  "ace/theme/textmate",
  "ace/theme/tomorrow",
  "ace/theme/twilight",
  "ace/theme/merbivore",
  "ace/theme/sqlserver",
  "ace/theme/dreamweaver",
  "ace/theme/katzenmilch",
  "ace/theme/vibrant_ink",
  "ace/theme/idle_fingers",
  "ace/theme/crimson_editor",
  "ace/theme/merbivore_soft",
  "ace/theme/pastel_on_dark",
  "ace/theme/solarized_dark",
  "ace/theme/tomorrow_night",
  "ace/theme/clouds_midnight",
  "ace/theme/mono_industrial",
  "ace/theme/solarized_light",
  "ace/theme/tomorrow_night_blue",
  "ace/theme/tomorrow_night_bright",
  "ace/theme/tomorrow_night_eighties"
]
/* DONT MIND ME: END */

const electron = require('electron')
const ipc = electron.ipcRenderer

themeSelector = document.getElementById('themeSelector')


/* adding themes to the theme list : START */

var options = []
var option = document.createElement('option')

for (var i = 0; i < themes.length; i++) {
  option.text = themes[i].split('/')[2]
  option.value = themes[i]
  options.push(option.outerHTML)
}

themeSelector.insertAdjacentHTML('beforeEnd', options.join('\n'))

/* adding themes to the theme list : END */

themeSelector.addEventListener('change', function() {
  ipc.send('themeChange', document.getElementById('themeSelector').value)
})

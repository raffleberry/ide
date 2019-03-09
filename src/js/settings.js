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
  ["ace/mode/abap", "ABAP"],
  ["ace/mode/abc", "ABC"],
  ["ace/mode/actionscript", "ActionScript"],
  ["ace/mode/ada", "ADA"],
  ["ace/mode/apache_conf", "Apache Conf"],
  ["ace/mode/asciidoc", "AsciiDoc"],
  ["ace/mode/asl", "ASL"],
  ["ace/mode/assembly_x86", "Assembly x86"],
  ["ace/mode/autohotkey", "AutoHotKey"],
  ["ace/mode/apex", "Apex"],
  ["ace/mode/batchfile", "BatchFile"],
  ["ace/mode/bro", "Bro"],
  ["ace/mode/c_cpp", "C Cpp"],
  ["ace/mode/c9search", "C9Search"],
  ["ace/mode/cirru", "Cirru"],
  ["ace/mode/clojure", "Clojure"],
  ["ace/mode/cobol", "Cobol"],
  ["ace/mode/coffee", "coffee"],
  ["ace/mode/coldfusion", "ColdFusion"],
  ["ace/mode/csharp", "CSharp"],
  ["ace/mode/csound_document", "Csound Document"],
  ["ace/mode/csound_orchestra", "Csound Orchestra"],
  ["ace/mode/csound_score", "Csound Score"],
  ["ace/mode/css", "CSS"],
  ["ace/mode/curly", "Curly"],
  ["ace/mode/d", "D"],
  ["ace/mode/dart", "Dart"],
  ["ace/mode/diff", "Diff"],
  ["ace/mode/dockerfile", "Dockerfile"],
  ["ace/mode/dot", "Dot"],
  ["ace/mode/drools", "Drools"],
  ["ace/mode/edifact", "Edifact"],
  ["ace/mode/eiffel", "Eiffel"],
  ["ace/mode/ejs", "EJS"],
  ["ace/mode/elixir", "Elixir"],
  ["ace/mode/elm", "Elm"],
  ["ace/mode/erlang", "Erlang"],
  ["ace/mode/forth", "Forth"],
  ["ace/mode/fortran", "Fortran"],
  ["ace/mode/fsharp", "FSharp"],
  ["ace/mode/fsl", "FSL"],
  ["ace/mode/ftl", "FTL"],
  ["ace/mode/gcode", "Gcode"],
  ["ace/mode/gherkin", "Gherkin"],
  ["ace/mode/gitignore", "Gitignore"],
  ["ace/mode/glsl", "Glsl"],
  ["ace/mode/gobstones", "Gobstones"],
  ["ace/mode/golang", "golang"],
  ["ace/mode/graphqlschema", "GraphQLSchema"],
  ["ace/mode/groovy", "Groovy"],
  ["ace/mode/haml", "HAML"],
  ["ace/mode/handlebars", "Handlebars"],
  ["ace/mode/haskell", "Haskell"],
  ["ace/mode/haskell_cabal", "Haskell Cabal"],
  ["ace/mode/haxe", "haXe"],
  ["ace/mode/hjson", "Hjson"],
  ["ace/mode/html", "HTML"],
  ["ace/mode/html_elixir", "HTML Elixir"],
  ["ace/mode/html_ruby", "HTML Ruby"],
  ["ace/mode/ini", "INI"],
  ["ace/mode/io", "Io"],
  ["ace/mode/jack", "Jack"],
  ["ace/mode/jade", "Jade"],
  ["ace/mode/java", "Java"],
  ["ace/mode/javascript", "JavaScript"],
  ["ace/mode/json", "JSON"],
  ["ace/mode/jsoniq", "JSONiq"],
  ["ace/mode/jsp", "JSP"],
  ["ace/mode/jssm", "JSSM"],
  ["ace/mode/jsx", "JSX"],
  ["ace/mode/julia", "Julia"],
  ["ace/mode/kotlin", "Kotlin"],
  ["ace/mode/latex", "LaTeX"],
  ["ace/mode/less", "LESS"],
  ["ace/mode/liquid", "Liquid"],
  ["ace/mode/lisp", "Lisp"],
  ["ace/mode/livescript", "LiveScript"],
  ["ace/mode/logiql", "LogiQL"],
  ["ace/mode/lsl", "LSL"],
  ["ace/mode/lua", "Lua"],
  ["ace/mode/luapage", "LuaPage"],
  ["ace/mode/lucene", "Lucene"],
  ["ace/mode/makefile", "Makefile"],
  ["ace/mode/markdown", "Markdown"],
  ["ace/mode/mask", "Mask"],
  ["ace/mode/matlab", "MATLAB"],
  ["ace/mode/maze", "Maze"],
  ["ace/mode/mel", "MEL"],
  ["ace/mode/mixal", "MIXAL"],
  ["ace/mode/mushcode", "MUSHCode"],
  ["ace/mode/mysql", "MySQL"],
  ["ace/mode/nix", "Nix"],
  ["ace/mode/nsis", "NSIS"],
  ["ace/mode/objectivec", "ObjectiveC"],
  ["ace/mode/ocaml", "OCaml"],
  ["ace/mode/pascal", "Pascal"],
  ["ace/mode/perl", "Perl"],
  ["ace/mode/perl6", "Perl6"],
  ["ace/mode/pgsql", "pgSQL"],
  ["ace/mode/php_laravel_blade", "PHP Laravel_blade"],
  ["ace/mode/php", "PHP"],
  ["ace/mode/puppet", "Puppet"],
  ["ace/mode/pig", "Pig"],
  ["ace/mode/powershell", "Powershell"],
  ["ace/mode/praat", "Praat"],
  ["ace/mode/prolog", "Prolog"],
  ["ace/mode/properties", "Properties"],
  ["ace/mode/protobuf", "Protobuf"],
  ["ace/mode/python", "Python"],
  ["ace/mode/r", "R"],
  ["ace/mode/razor", "Razor"],
  ["ace/mode/rdoc", "RDoc"],
  ["ace/mode/red", "Red"],
  ["ace/mode/rhtml", "RHTML"],
  ["ace/mode/rst", "RST"],
  ["ace/mode/ruby", "Ruby"],
  ["ace/mode/rust", "Rust"],
  ["ace/mode/sass", "SASS"],
  ["ace/mode/scad", "SCAD"],
  ["ace/mode/scala", "Scala"],
  ["ace/mode/scheme", "Scheme"],
  ["ace/mode/scss", "SCSS"],
  ["ace/mode/sh", "SH"],
  ["ace/mode/sjs", "SJS"],
  ["ace/mode/slim", "Slim"],
  ["ace/mode/smarty", "Smarty"],
  ["ace/mode/snippets", "snippets"],
  ["ace/mode/soy_template", "Soy Template"],
  ["ace/mode/space", "Space"],
  ["ace/mode/sql", "SQL"],
  ["ace/mode/sqlserver", "SQLServer"],
  ["ace/mode/stylus", "Stylus"],
  ["ace/mode/svg", "SVG"],
  ["ace/mode/swift", "Swift"],
  ["ace/mode/tcl", "Tcl"],
  ["ace/mode/terraform", "Terraform"],
  ["ace/mode/tex", "Tex"],
  ["ace/mode/text", "Text"],
  ["ace/mode/textile", "Textile"],
  ["ace/mode/toml", "Toml"],
  ["ace/mode/tsx", "TSX"],
  ["ace/mode/twig", "Twig"],
  ["ace/mode/typescript", "Typescript"],
  ["ace/mode/vala", "Vala"],
  ["ace/mode/vbscript", "VBScript"],
  ["ace/mode/velocity", "Velocity"],
  ["ace/mode/verilog", "Verilog"],
  ["ace/mode/vhdl", "VHDL"],
  ["ace/mode/visualforce", "Visualforce"],
  ["ace/mode/wollok", "Wollok"],
  ["ace/mode/xml", "XML"],
  ["ace/mode/xquery", "XQuery"],
  ["ace/mode/yaml", "YAML"],
  ["ace/mode/django", "Django"]
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
modeSelector.value = settings.get('editor.mode')
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
  settings.set('editor.mode', String(modeSelector.value))
})
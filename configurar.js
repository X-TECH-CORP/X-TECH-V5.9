const fs = require('fs');
const chalk = require('chalk');

global.numerodono = "2250500107362";
global.nomedono = "??-?????";
global.prefixo = "?";
global.packnome = "feito por: ??-?????\ncriador:+2250500107362\ncanal:https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41";
global.author = "??-?????\n2250500107363\nyoutube.com/@X-TECH-CORP";
global.autoGravar = false;
global.autoDigitar = false;
global.autoreDigitarGravar = false;
global.autoVisualizarMsg = true;
global.autobio = false;
global.autovisualizar_status = true;
global.antilink_grupo = false;


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`configurar.js foi atualizado!`))
    delete require.cache[file]
    require(file)
})
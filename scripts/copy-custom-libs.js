// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
const existingConfig = require('../node_modules/@ionic/app-scripts/config/copy.config');
module.exports = {
    copyFontAwesomeFonts: {
        src: ['{{ROOT}}/node_modules/font-awesome/fonts/**/*'],
        dest: '{{WWW}}/assets/fonts'
    },

    copyFontAwesomeCss: {
        src: ['{{ROOT}}/node_modules/font-awesome/css/font-awesome.min.css'],
        dest: '{{WWW}}/assets/css'
    },
}

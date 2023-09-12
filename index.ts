import { argbFromHex, themeFromSourceColor  } from '@material/material-color-utilities';

var oldDocument: Document | undefined;
export default function setupMD3(documentImport: Document) {
    oldDocument = document
}

const isDark = false;
const cssSeed = '#ff00ff'
// const isDark = oldDocument ? oldDocument.documentElement.classList.contains('dark') : false;
// const cssSeed = oldDocument ? getComputedStyle(oldDocument.documentElement)
// .getPropertyValue('--md-source') : "#ff0000"
const m3Theme = themeFromSourceColor(argbFromHex(cssSeed), []);
const m3Scheme = m3Theme.schemes[isDark ? 'dark' : 'light']
// import InteractiveStateLayer from './surface/interactive'

// module.exports = {InteractiveStateLayer}
export {m3Theme, m3Scheme}
export * from './components/surfaces'
export * from './components/buttons'
export * from './components/text'
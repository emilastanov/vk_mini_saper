const fs = require('fs');
const path = require('path');

const buildPath = path.resolve(__dirname, 'build/static/js');

const mainFileRegex = /^main\.[a-f0-9]+\.js$/;
const mainFile = fs.readdirSync(buildPath).find((file) => mainFileRegex.test(file));

if (mainFile) {
    const minifiedCode = fs.readFileSync(path.join(buildPath, mainFile), 'utf8');

    function myWrapperFunction(code) {
        return `function a2x9s() {${code}};a2x9s();baclksdjb(a2x9s).then(r=>document.xsm_=r);`;
    }

    const wrappedCode = myWrapperFunction(minifiedCode);

    fs.writeFileSync(path.join(buildPath, mainFile), wrappedCode, 'utf8');
} else {
    console.error('Main JavaScript file not found.');
}

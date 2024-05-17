const chai = require('chai')
const sinon = require('sinon')
global.expect = chai.expect
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');
const assert = require('assert');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const readFileSynchronously = (filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    console.error('Error reading file:', err);
    return null;
  }
};

// File paths
const files = [
  path.resolve(__dirname, '..', 'selectionStatements.js'),
  path.resolve(__dirname, '..', 'repetitionStatements.js'),
  path.resolve(__dirname, '..', 'statements.js'),
];

// Read files synchronously
const fileContents = files.map(file => readFileSynchronously(file));

// Process file contents
const allCode = fileContents.join('\n\n');

// Use Babel to transform the code
const babelResult = babel.transform(allCode, {
  presets: ['env']
});

const src = babelResult.code

jsdom({
  html, src
});

module.exports = {
  assert,
  chai,
  sinon,
  fs,
  jsdom,
  path,
  babel,
  html,
  babelResult,
  src,
}
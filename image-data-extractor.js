#!/usr/bin/env node

const fs = require('fs');

const inputDir = process.argv[2];

const files = fs.readdirSync(inputDir, {encoding: 'utf-8'});
const out = files.map(file => {
  const [year, show, title, artist] = file.split('-');
  return {year: +year, show, title: title.replace(/_/g, ' '), media: 'Ceramics', filename: file};
});

console.log(JSON.stringify(out));

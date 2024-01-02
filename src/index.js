import path from 'node:path';
import fs from 'node:fs';

const getAbsolutePath = (filepath) => {
  return path.resolve(process.cwd(), filepath);
};
const readFile = (filepath) => {
  return fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
};
const parse = (filepath) => {
  return JSON.parse(filepath);
};

const getProcessedFile = (filepath) => {
  const result = parse(readFile(getAbsolutePath(filepath)));
  return result;
};

export { getProcessedFile };

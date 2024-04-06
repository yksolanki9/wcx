import fs from "fs";

const readFile = (filePath) => fs.readFileSync(filePath).toString()

export const getByteCountUtil = (file) => new Blob([file]).size;

export const getByteCount = (filePath) => getByteCountUtil(readFile(filePath));

export const getLineCountUtil = (file) => file.split("\n").length - 1

export const getLineCount = (filePath) => getLineCountUtil(readFile(filePath));

export const getWordCountUtil = (file) => file.trim().split(/\s+/).length

export const getWordCount = (filePath) => getWordCountUtil(readFile(filePath));

export const getCharCountUtil = (file) => file.length

export const getCharCount = (filePath) => getCharCountUtil(readFile(filePath))

export const getFileStats = (filePath) => {
  const file = readFile(filePath);
  return getLineCountUtil(file) + ' ' + getWordCountUtil(file) + ' ' + getByteCountUtil(file);
}
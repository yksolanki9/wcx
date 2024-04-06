#!/usr/bin/env node

import {
  getByteCount,
  getLineCount,
  getWordCount,
  getCharCount,
  getFileStats,
} from "./utils.js";

const handleCommand = ({ option, filePath }) => {
  switch (option) {
    case "-c":
      return getByteCount(filePath);
    case "-l":
      return getLineCount(filePath);
    case "-w":
      return getWordCount(filePath);
    case "-m":
      return getCharCount(filePath);
    case null:
      return getFileStats(filePath);
    default:
      throw new Error("Invalid option");
  }
};

const main = () => {
  if (process.argv.length > 2) {
    const arg1 = process.argv[2];
    const arg2 = process.argv[3];
    const stdin = process.stdin;

    const config = {
      option: arg2 || !stdin.isTTY ? arg1 : null,
      filePath: stdin.isTTY ? arg2 ?? arg1 : 0,
    };

    try {
      console.log(handleCommand(config) + " " + (config.filePath || ""));
    } catch (err) {
      console.error(err);
    }
  }
};

main();

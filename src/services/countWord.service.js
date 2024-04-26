const fetch = require('node-fetch');
const { countBy } = require('lodash');

class CountWordService {
  constructor() {
    this.url =
      "https://gist.githubusercontent.com/deekayen/4148741/raw/98d35708fa344717d8eee15d11987de6c8e26d7d/1-1000.txt";
  }

  async loadCommonWords() {
    const response = await fetch(this.url);
    const commonWordsText = await response.text();
    return new Set(commonWordsText.split("\n"));
  }

  countWordsToService(text, commonWords) {
    const words = text.split(/\s+/);
    const filteredWords = words.filter((word) =>
      commonWords ? !commonWords?.has(word.toLowerCase()) : false
    );
    return countBy(filteredWords);
  }

  async getCommonsWords() {
    return await this.loadCommonWords();
  }
}

module.exports = CountWordService;
const Service = require("../services/countWord.service");

const countService = new Service();
class CountWordController {
  async countWords(req, res) {
    if (req.is("text/plain")) {
      const text = req.body;

      if (!text) {
        return res.status(400).json({ error: "Texto no proporcionado" });
      }
      const commonWords = await countService.getCommonsWords()
      const wordCounts = countService.countWordsToService(text,commonWords);
      const sortedWordCounts = Object.fromEntries(
        Object.entries(wordCounts).sort((a, b) => b[1] - a[1])
      );

      res.json(sortedWordCounts);
    } else {
      res.status(400).json({
        error:
          "Formato de solicitud no admitido. El contenido debe ser texto plano.",
      });
    }
  }
}

module.exports = CountWordController;

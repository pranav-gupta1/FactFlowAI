const express = require('express');
const router = express.Router();

router.post('/detect', (req, res) => {
  const { content } = req.body;

  const misinformationKeywords = ['fake news', 'hoax', 'conspiracy', 'track'];
  const flagged = misinformationKeywords.some((keyword) =>
    content.toLowerCase().includes(keyword)
  );

  res.json({
    success: true,
    flagged,
    correction: flagged
      ? 'This content may contain misinformation.'
      : 'Content appears to be accurate.',
  });
});

module.exports = router;
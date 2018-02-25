module.exports = (req, res, next) => {
  const {
    userName = 'Guest',
    greeting = 'Hello!!',
  } = req.query;

  res.json({ message: `${userName}, ${greeting}` });
}
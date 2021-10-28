// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const content = require("../content/test.raw?-treeshake&keepUnused");

export default function handler(req, res) {
  res.status(200).json({ content })
}

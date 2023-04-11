import axios from "axios";

export default async function handler(req, res) {
  if (req?.method === "POST") {
    try {
      const { data } = await axios.post(
        "http://www.mocky.io/v2/5dfcef48310000ee0ed2c281/",
        req.body
      );
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error: error?.message || error });
    }
  } else {
    res.status(405).end("Method Not Allowed");
  }
}

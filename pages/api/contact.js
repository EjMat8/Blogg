import { connectToDatabase } from "../../util/db-util";

export default async function handler(req, res) {
  if (req.method !== "POST") return;
  const { email, message, name } = req.body;
  if (
    !email.trim() ||
    !email.includes("@") ||
    !message.trim() ||
    !name.trim()
  ) {
    res.status(422).json({ message: "Invalid Input/s" });
    return;
  }
  let client;
  try {
    client = await connectToDatabase();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong connecting to the server!" });
    client.close();
    return;
  }

  try {
    await client
      .db()
      .collection("feedback")
      .insertOne({ email, message, name });
    res.status(201).json({ message: "Successfully contacted!" });
    client.close();
  } catch (err) {
    res.status(500).json({
      message: "Could not send! Something went wrong connecting to the server!",
    });
  }
}

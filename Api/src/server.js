import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
    });
    const db = client.db("todolist-db");
    await operations(db);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};

app.post("/api/v1/todos/create", async (req, res) => {
  const { content } = req.body;

  withDB(async (db) => {
    const todo = await db.collection("todos").insertOne({
      id: new ObjectId(),
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
      isCompleted: false,
    });

    console.log(todo);
    res.status(201).json(todo);
  }, res);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

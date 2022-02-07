import express from "express";
import bodyParser from "body-parser";
import { MongoClient, ObjectId } from "mongodb";

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
    console.log(error);
    res.status(500).json({ message: "Error connecting to db", error });
  }
};

app.post("/api/v1/todos/create", async (req, res) => {
  const { title } = req.body;

  withDB(async (db) => {
    const { insertedId } = await db.collection("todos").insertOne({
      title,
      createdAt: new Date(),
      updatedAt: new Date(),
      isCompleted: false,
    });

    const todo = await db.collection("todos").findOne({ _id: insertedId });

    res.status(201).json(todo);
  }, res);
});

app.get("/api/v1/todos", async (req, res) => {
  withDB(async (db) => {
    const todos = await db.collection("todos").find({}).toArray();
    res.status(200).json(todos);
  }, res);
});

app.post("/api/v1/todos/:id/complete", async (req, res) => {
  const { id } = req.params;

  withDB(async (db) => {
    await db
      .collection("todos")
      .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { isCompleted: true } });

    const todo = await db.collection("todos").findOne({ _id: ObjectId(id) });

    res.status(200).json(todo);
  }, res);
});

app.post("/api/v1/todos/:id/not-complete", async (req, res) => {
  const { id } = req.params;

  withDB(async (db) => {
    await db
      .collection("todos")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { isCompleted: false } }
      );

    const todo = await db.collection("todos").findOne({ _id: ObjectId(id) });

    res.status(200).json(todo);
  }, res);
});

app.delete("/api/v1/todos/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  withDB(async (db) => {
    const todo = await db.collection("todos").deleteOne({ _id: ObjectId(id) });
    res.status(200).json(todo);
  }, res);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

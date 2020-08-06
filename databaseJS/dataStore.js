//Creating a wrapper for database logic that can be used in any application as long as it is written in JS. Very flexible file. You can use anywhere. need to copy and paste

"use strict";

const MongoClient = require("mongodb").MongoClient; //grabs MongoClient out of the mongodb package
const ObjectId = require("mongodb").ObjectId;

//This connects to the database. We are tracking the url of the databate, database name, connection
class DataStore {
  constructor(dbURL, dbName, dbCollection) {
    this.dbURL = dbURL;
    this.dbName = dbName;
    this.dbClient = null; //This is the open connection between our database and our server.
    this.dbCollection = dbCollection;
  }
  async client() {
    console.log("connecting to " + this.dbURL);
    if (this.dbClient && this.dbClient.isConnected()) {
      //If there is a client and there is a connection
      return this.dbClient;
    } else {
      this.dbClient = await MongoClient.connect(this.dbURL, {
        useUnifiedTopology: true,
      });
      console.log("connected to database");
      return this.dbClient;
    }
  }

  //Searchable subsets
  async searchField(field, value) {
    let collection = await this.collection();

    return collection.find({ [field]: value });
  }

  //Connects to the collection
  async collection() {
    const client = await this.client();
    const db = client.db(this.dbName);
    const collection = db.collection(this.dbCollection);

    return collection;
  }

  //Gets all of the documents out of the collection
  async getAll() {
    let collection = await this.collection();
    return collection.find({});
  }
  //This gets one document out of the collection
  async getOne(id) {
    let idObj = new ObjectId(id);

    let collection = await this.collection();
    return collection.find({ _id: idObj });
  }

  //Creates a doc using Javascript
  async setDoc(myObj) {
    let collection = await this.collection();
    let result = await collection.insertOne(myObj);

    console.log(`Inserted ${{ myObj }} with ID: ${result.insertedId}`);
  }

//Creates many docs
async setMany(objArr){
  let collection = await this.collection();
  await collection.insertMany(objArr)
  console.log("Created" + objArr.length + "items")
}

  //Updates a document based on its id
  async updateDoc(id, update) {
    let collection = await this.collection();
    let idObj = new ObjectId(id);
    await collection.updateOne({ _id: idObj }, { $set: update });
    console.log(`Updated document with ID: ${id}`);
  }

  //Deletes a document
  async deleteDoc(id) {
    let collection = await this.collection();
    let idObj = new ObjectId(id);
    await collection.deleteOne({ _id: idObj });
    console.log(`Delected document with an Id: ${id}`);
  }
  //Mass deletes documents
  async deleteMany(idArray) {
    let collection = await this.collection();

    let idObjArr = idArray.map((id) => {
      return new ObjectId(id);
    });

    collection.deleteMany({ _id: { $in: idObjArr } });

    console.log("Deleted" + idArray.length + "documents");
  }

  async clear(){
    let collection = await this.collection();
    await this.collection.deleteMany({})
  }
}



module.exports = DataStore;

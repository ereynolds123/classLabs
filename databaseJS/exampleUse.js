const DataStore = require("./dataStore");
const readline = require("readline");
const rli = readline.createInterface(process.stdin, process.stdout);

let myDb = new DataStore("mongodb://127.0.0.1", "test", "library"); //Brings the class in. Sets up a MongoDb client

async function showData() {
  let cursor = await myDb.getAll();
  let allDocs = [];

  await cursor.forEach((entry) => {
    allDocs.push(entry);
    console.log(entry);
  });
  return allDocs;
}

//Asks the user for input, returns a promise
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rli.question(questionText, resolve);
  });
}

//This function allows your to run all CRUD functions from the command line
async function start() {
  let userAction = await ask("What would you like to do?");
  let userActionSanitized = userAction.trim().toLowerCase();
  //Shows all records
  if (userActionSanitized === "show all") {
    showData();
    //Allows you to delete a record with an id
  } else if (userActionSanitized === "delete") {
    let id = await ask("What is your id?");
    deleteBook(id);
    //Allows you to add a book
  } else if (userActionSanitized === "add book") {
    let title = await ask("What is the title?");
    let author = await ask("What is the author?");
    let checkedOut = await ask(
      "Is the book checked out? Use 'true' or 'false'?"
    );
    let copiesLeft = await ask("How many copies do you have?");
    addBook(title, author, checkedOut, copiesLeft);
    //Allows you to show one book
  } else if (userActionSanitized === "show book") {
    let id = await ask("What is your id?");
    showOne(id);
    //Allows you to update an entry
  } else if (userActionSanitized === "update book") {
    let id = await ask("What is your id?");
    let category = await ask("What is your category?");
    let update = await ask("What is your update to the category?");
    updateBook(id, category, update);
    //Adds many books in a loop
  } else if (userActionSanitized === "add many") {
    let isDone="no";
    let itemArray = [];
    while (isDone==="no") {
      let title = await ask("What is your title?");
      let author = await ask("What is your author?");
      let checkedOut = await ask(
        "Is the item checked out? Say 'true' or 'false'?" );
        let copies = await ask("How many copies do you have?");
     let bookObj={title: title, author: author, checkedOut:checkedOut, copies: copies}
      
      itemArray.push(bookObj);

      isDone = await ask("Are you done?");
      
    }
   
    addManyBooks(itemArray)
    //Catch all for invalid responses
  } else {
    console.log("That is not a valid response. Try again");
  }
}
//This function shows one document based on the id
async function showOne(id) {
  let cursor = await myDb.getOne(id);
  let oneDoc = [];

  await cursor.forEach((entry) => {
    oneDoc.push(entry);
  });
  console.log(oneDoc);
  process.exit();
}

//Adds a book to the library collection
async function addBook(title, author, checkedOut, copiesLeft) {
  let bookObj = {
    title: title,
    author: author,
    checkedOut: checkedOut,
    copies: copiesLeft,
  };
  await myDb.setDoc(bookObj);
  process.exit();
}

//Adds many books
async function addManyBooks(bookArr) {
  await myDb.setMany(bookArr);
}

//Function updates an entry
async function updateBook(id, category, update) {
  updateObj = {
    [category]: update,
  };
  await myDb.updateDoc(id, updateObj);
}

//Deletes one document
async function deleteBook(id) {
  await myDb.deleteDoc(id);
  return;
}

//Deletes all documents you give it
async function deleteMulti(idArr) {
  await myDb.deleteMany(idArr);
  return;
}

//Searchs Field
async function getBooksByField(field, query) {
  let results = [];
  let cursor = await myDb.searchField(field, query);

  await cursor.forEach((doc) => results.push(doc));
  console.log(results);
  return;
}

start();

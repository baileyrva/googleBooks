const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(prcoess.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = {
  authors: ["Stephen King"],
  description:
    "Stephen King’s terrifying, classic #1 New York Times bestseller, “a landmark in American literature” (Chicago Sun-Times)—about seven adults who return to their hometown to confront a nightmare they had first stumbled on as teenagers…an evil without a name: It.",
  image:
    "https://books.google.com/books/content?id=S85NCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70XITvHxMG_xV3PWSnUROq9wCeyVzOl7LGSzoYMkZaa9Zj0Cj2SDColbut_-U7-kwAsgtSFa5DYWR1eT3oA5oOcMAQPlP1o3v9eat28rz7jOUNC2owkSnTi2d9QwPCZLwd8qVDn",
  link: "https://books.google.com/books/about/It.html?id=S85NCwAAQBAJ",
  title: "IT",
};

db.book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

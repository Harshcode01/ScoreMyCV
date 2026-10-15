const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    console.log("database connected successfully!");
  })
  .catch((err) => {
    console.log("something error,", err);
  });


  
 // jharshad417_db_user

// Re6iWBMR6cevHEg9


// mongodb+srv://<db_username>:Re6iWBMR6cevHEg9@cluster0.agzs9mn.mongodb.net/?appName=Cluster0
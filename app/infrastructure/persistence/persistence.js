const mongoose = require('mongoose');

class Persistence {
  static connectToDatabase() {
    return new Promise((resolve, reject) => {
      mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .then(() => {
        console.log('Connected to database');
        resolve();
      })
      .catch((error) => {
        console.log(`Error connecting to database: ${error}`);
        reject();
      });
    });
  }
}

module.exports = Persistence;

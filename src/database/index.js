import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.connection = mongoose.connect(
      'mongodb+srv://pedroaraujo:alanwake15@cluster0-yznzy.mongodb.net/bossabox?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }
}

export default new Database();

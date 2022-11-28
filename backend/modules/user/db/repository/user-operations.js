const UserModel = require("../models/user-schema");

module.exports = {
  async add(userObject) {
    try {
      const doc = await UserModel.create(userObject);
      return doc;
    } catch (err) {
      console.log("Cannot ADD",err);
      throw err;
    }
  },
  remove() {},
  update() {},
  async read(userObject) {
    try{

        const doc = await UserModel.findOne({ email: userObject.email }).exec();
        if (doc && doc._id) {
            return doc;
        }else{
            const record= await this.add(userObject);
            return record;
        }
    }catch(err){
        console.log("cannot READ",err);
        throw err;
    }
  },
};

const connection = require("../../../../shared/helper/db/connect");
const { USER_SCHEMA } = require("../../../../shared/config/constants").SCHEMAS;
const { Schema, SchemaTypes } = connection;
const UserSchema = new Schema(
  {
    name: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, required: true, unique: true },
    photo: { type: SchemaTypes.String },
    gmailuid: { type: SchemaTypes.String },
    facebookid: { type: SchemaTypes.String },
  },
  { timestamps: true }
);
const UserModel = connection.model(USER_SCHEMA, UserSchema);
module.exports = UserModel;

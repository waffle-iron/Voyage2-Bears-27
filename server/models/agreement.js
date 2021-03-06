import mongoose, { Schema } from 'mongoose';
import agreementMethods from './methods/agreementMethods';

const agreementSchema = new Schema({
  // Create the schema for the User collection

  creator: {
    type: String,
    required: true,
    unique: true
  },

  title: {
    type: String,
    required: true,
    unique: false
  },

  type: {
    type: String,
    enum: ['public', 'private', 'commercial',],
    required: true,
    unique: false
  },

  agreement: {
    type: String,
    required: true,
    unique: false
  },

  agreement_version: {
    type: Number,
    required: true,
    unique: false
  },

});

// Create a model for the schema
agreementSchema.loadClass(agreementMethods);
const Agreement = mongoose.model('Agreement', agreementSchema);

export default Agreement;

const mongoose = require('mongoose');

// Define a schema with Mixed type for arbitrary JSON data
const AnyDepthSchema = new mongoose.Schema({
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
});

// Create the model using the schema
const AnyDepthModel = mongoose.model('AnyDepth', AnyDepthSchema);

module.exports = AnyDepthModel;

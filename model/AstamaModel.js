const mongoose = require('mongoose');

// Define a schema with Mixed type for arbitrary JSON data
const AstamaSchema = new mongoose.Schema({
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
});

// Create the model using the schema
const AnyDepthModel = mongoose.model('AstamaSchema', AstamaSchema);

module.exports = AnyDepthModel;

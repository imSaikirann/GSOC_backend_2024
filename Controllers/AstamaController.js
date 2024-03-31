const AnyDepthModel = require('../model/AstamaModel')


const postData = async (req, res) => {
  const { data } = req.body;
  try {
    // Create a new document instance using the provided data
    const newData = await AnyDepthModel.create({ data });
    
    // Respond with the newly created document
    res.status(200).json(newData);
  } catch (error) {
    // Handle any errors that occur during the creation process
    console.error('Error creating document:', error);
    res.status(400).json({ error: error.message });
  }
}

const getData = async (req, res) => {
  try {
    // Retrieve all tools from the database
    const tools = await AnyDepthModel.find({});

    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  } 
}


module.exports = { postData, getData};
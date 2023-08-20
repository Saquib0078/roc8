const mongoose=require('mongoose')


const data=async(req,res)=>{
  try {
    const productsCollection = mongoose.connection.collection('test-data'); // Change 'products' to your collection name
    const products = await productsCollection.find().toArray();
    res.json({electricity:products});
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).json({ error: error.message});
  }
}


module.exports.data=data




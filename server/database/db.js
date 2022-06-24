import mongoose from "mongoose"



const Connection = async () => {
    const URL = `mongodb://user:codeforinterview@crud-app-shard-00-00.lhvkk.mongodb.net:27017,crud-app-shard-00-01.lhvkk.mongodb.net:27017,crud-app-shard-00-02.lhvkk.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-3m4a6h-shard-0&authSource=admin&retryWrites=true&w=majority`;
    console.log('Database Connected Successfilly');
    try {
        return await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
    } catch (error) {
        console.log('Error While Connecting with database', error)
    }
}

export default Connection;
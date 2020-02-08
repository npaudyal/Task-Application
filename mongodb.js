//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')
const id = new ObjectID()




const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error){
         return console.log("Unable to connect to database!")
    } else {

        const db = client.db(databaseName)
    

//     const updatePromise = db.collection('users').updateOne({
//         _id: new ObjectID("5e3c893fa8ac2b0d04b193d5")
//     }, {
//         $inc: {
//             age: 1
//         }
//     })
//     updatePromise.then((result) =>{
//         console.log(result)

//     }).catch((error) => {
//         console.log(error)
//     })

// }
        // db.collection('users').updateMany({
        //     age: 21
        // }, {
        //     $set: {
        //         name: "21 barsa ko kta moh!"
        //     }
            
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error )
        // })
    
        db.collection('users').deleteOne({name: 'Nick'}).then((result)=>{
            console.log(result)
        }).catch((error)=> {
            console.log(error)
        })

    }

})    


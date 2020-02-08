require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e3d93224c5fba1644f83f1c').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result) => {
//     console.log(result)
// }).catch((e)=> {
//     console.log(e)
// })


const DeleteTaskAndCount = async(id, completed ) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return count
}

DeleteTaskAndCount('5e3ce6001ac4df819447d27e', false).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const {Router} = require ('express')

const router = Router();
const Todo = require ('../modals/Todo.js')

router.post('/add', async (res,req) => {
    try {
        const {text, userId} =req.body

        const todo = await new Todo({
            text,
            owner: userId,
            completed: false,
            important: false,
        })

        await todo.save()

        res.json(todo)

    } catch (error) {
        console.log(error);
    }
})



module.exports = router
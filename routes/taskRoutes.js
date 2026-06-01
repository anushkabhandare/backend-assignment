const authMiddleware=
require("../middleware/authMiddleware");
const adminMiddleware=
require("../middleware/adminMiddleware");
const router=
require("express").Router();

const {

createTask,
getTasks,
updateTask,
deleteTask

}=require("../controllers/taskController");

router.post(
"/",
authMiddleware,
createTask
);
router.get(
"/",
authMiddleware,
getTasks
);
router.put(
"/:id",
authMiddleware,
updateTask
);
router.delete(
"/:id",
authMiddleware,
adminMiddleware,
deleteTask
);

module.exports=router;
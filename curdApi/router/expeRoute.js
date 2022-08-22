const router = require("express").Router();
const routFunct = require("../controller/routFunct");

router.post("/",routFunct.expense_create);
router.get("/",routFunct.expense_all);
router.get("/:expenseId",routFunct.expense_detail);
router.put("/:expenseId",routFunct.expense_update);
router.delete("/:expenseId",routFunct.expense_delete);


module.exports = router;
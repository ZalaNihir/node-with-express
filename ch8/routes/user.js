const express = require("express");
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleStoreUser } = require('../controllers/user');
const router = express.Router();

router.route("/")
    .get(handleGetAllUsers)
    .post(handleStoreUser);
router.route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);
module.exports = router;
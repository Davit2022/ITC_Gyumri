const express = require('express');
const router = express.Router();

router.get('/',  (req, res) => {
	res.status(200).json({msg: `It's a GET request.`});
});

router.post('/',  (req, res) => {
	res.status(200).json({msg: `It's a POST request.`});
});

router.put('/', (req, res) => {
	res.status(200).json({msg: `It's a PUT request.`});
});

router.delete('/', (req, res) => {
	res.status(200).json({msg: `It's a DELETE request.`});
});

module.exports = router;
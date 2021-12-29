const validateMiddleware = (req, res, next) => {
    const { name, phone } = req.body.contact;
    const phoneRegex = /\+374([1-9]{1})([0-9]{7})$/;
    const nameRegex = /^\s*([A-Z]{1})([a-z]{1,})$/;
    (phoneRegex.test(phone) && nameRegex.test(name)) ? 
    next(): next(res.status(400).json({msg:"The entered data didn't pass the validation"}));
};

module.exports = validateMiddleware
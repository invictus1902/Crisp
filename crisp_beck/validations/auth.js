import {body} from "express-validator";

export const registerValidation = [
    body('email','укажите обизательно @').isEmail(),
    body('password','пороль должен быть не мение 8 символов').isLength({min:8}),
    body('name',).isLength({min:3}),
    body('avatarUrl').optional().isURL()

]
import { handleError } from "./handleError.middleware";
import { idExists } from "./idExists.middleware";
import { isAdmin } from "./isAdmin.middleware";
import { updateIsAdmin } from "./updateIsAdmin.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { uniqueCategory } from "./uniqueCategory.middleware";
import { validateDate } from "./validateDate.middleware";

export default{
    handleError,
    idExists,
    isAdmin,
    updateIsAdmin,
    validateBody,
    verifyToken,
    uniqueEmail,
    uniqueCategory,
    validateDate
}
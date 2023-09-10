import { handleError } from "./handleError.middleware";
import { idExists } from "./idExists.middleware";
import { isAdmin } from "./isAdmin.middleware";
import { updateIsAdmin } from "./updateIsAdmin.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { uniqueCategory } from "./uniqueCategory.middleware";
import { validateDate } from "./validateDate.middleware";
import { addressExists } from "./addressExists.middleware";
import { idCategoryRealEstateExists } from "./idCategoryRealEstateExists.middleware";
import { uniqueDateRealEstate } from "./uniqueDateRealEstate.middleware";
import { uniqueDateUser } from "./uniqueDateUser.middlewares";
import { idRealEstateExists } from "./idRealEstateExists.middlewares";
import { idRealEstateExistsParams } from "./idRealEstateExistsParams.middleware";

export default {
  handleError,
  idExists,
  isAdmin,
  updateIsAdmin,
  validateBody,
  verifyToken,
  uniqueEmail,
  uniqueCategory,
  validateDate,
  addressExists,
  idCategoryRealEstateExists,
  uniqueDateRealEstate,
  uniqueDateUser,
  idRealEstateExists,
  idRealEstateExistsParams,
};

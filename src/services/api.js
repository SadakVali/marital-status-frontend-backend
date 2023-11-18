const BACKEND_BASE_URL_ONE = process.env.REACT_APP_BASE_URL_ONE;
const BACKEND_BASE_URL_TWO = process.env.REACT_APP_BASE_URL_TWO;

// TRANING ENDPOINT APIs
export const trainingEndPoints = {
  FETCH_FACE_VERIFICATION_DB: BACKEND_BASE_URL_ONE + "/training/get-database",
};

// DASHBOARD ENDPOINT APIs
export const saveNewMarriageInfo = {
  SAVE_NEW_MARRIAGE_INFO:
    BACKEND_BASE_URL_ONE + "/dashboard/save-marriage-info",
};

// USER ENDPOINT APIs
export const userEndPoints = {
  FETCH_MARRIAGE_INFO_OF_PERSON_API_TWO:
    BACKEND_BASE_URL_ONE + "/check-marital-status/get-marriage-info",
  FETCH_MARRIAGE_INFO_OF_PERSON_API_ONE:
    BACKEND_BASE_URL_TWO + "/check-marital-status",
};

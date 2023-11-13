const BACKEND_BASE_URL = process.env.REACT_APP_BASE_URL;

// TRANING ENDPOINT APIs
export const trainingEndPoints = {
  FETCH_FACE_RECOGNITION_DB: BACKEND_BASE_URL + "/training/get-database",
};

// DASHBOARD ENDPOINT APIs
export const saveNewMarriageInfo = {
  SAVE_NEW_MARRIAGE_INFO: BACKEND_BASE_URL + "/dashboard/save-marriage-info",
};

// USER ENDPOINT APIs
export const fetchMarriageInfoOfPeople = {
  FETCH_MARRIAGE_INFO_OF_PEOPLE:
    BACKEND_BASE_URL + "/check-status/get-marriage-info",
};

// import from packages
import { toast } from "react-hot-toast";

// redux related imports
import {
  setLoading,
  setMatchedCriminalsData,
  setMatchedCriminalsMarriageIds,
} from "../../slices/userSlice";

// API call related imports
import { apiConnector } from "../apiConnector";
import { userEndPoints } from "../api";

const {
  FETCH_MARRIAGE_INFO_OF_PERSON_API_ONE,
  FETCH_MARRIAGE_INFO_OF_PERSON_API_TWO,
} = userEndPoints;

export const checkMaritalStatusOfPerson =
  (data, navigate) => async (dispatch) => {
    const toastId = toast.loading("Loading...");
    // console.log({ FETCH_MARRIAGE_INFO_OF_PERSON_API_ONE });
    // console.log(data);
    dispatch(setLoading(true));
    try {
      let firstResponse = await apiConnector(
        "POST",
        FETCH_MARRIAGE_INFO_OF_PERSON_API_ONE,
        data,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      // firstResponse = JSON.parse(firstResponse);
      console.log(
        "FETCH_MARRIAGE_INFO_OF_PERSON_API_ONE API RESPONSE......",
        firstResponse
      );
      if (!firstResponse?.data?.success)
        throw new Error(firstResponse?.data?.message);
      dispatch(setMatchedCriminalsMarriageIds(firstResponse?.data?.data));

      console.log(firstResponse?.data?.data);

      const secondResponse = await apiConnector(
        "POST",
        FETCH_MARRIAGE_INFO_OF_PERSON_API_TWO,
        { marriageIds: firstResponse?.data?.data }
      );
      console.log(
        "FETCH_MARRIAGE_INFO_OF_PERSON_API_TWO API RESPONSE......",
        secondResponse
      );
      if (!secondResponse?.data?.success)
        throw new Error(secondResponse?.data?.message);
      dispatch(setMatchedCriminalsData(secondResponse?.data?.data));

      toast.success("Fetching Matching Person Images Successfull");
      navigate("/spouse-confirmation");
    } catch (error) {
      console.log("FETCH_MARRIAGE_INFO_OF_PERSON_API API ERROR......", error);
      toast.error("Checking Marital Status Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };

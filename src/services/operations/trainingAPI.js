// import from packages
import { toast } from "react-hot-toast";

// redux related imports
import { setLoading } from "../../slices/trainingSlice";

// API call related imports
import { apiConnector } from "../apiConnector";
import { trainingEndPoints } from "../apis";

const { FETCH_FACE_VERIFICATION_DB } = trainingEndPoints;

export const getFaceVerifTrainingDB = (navigate) => async (dispatch) => {
  const toastId = toast.loading("Loading...");
  dispatch(setLoading(true));
  try {
    const response = await apiConnector("POST", FETCH_FACE_VERIFICATION_DB, {});
    console.log("FETCH_FACE_VERIFICATION_DB API RESPONSE......", response);
    if (!response?.data?.success) throw new Error(response?.data?.message);
    toast.success("Fetching DB Successfull");
    console.log("FACE_VERIFICATION_DB...", response?.data?.data);

    // Convert the JavaScript object to a JSON string
    const jsonString = JSON.stringify(response?.data?.data);
    // Create a Blob from the JSON string
    const blob = new Blob([jsonString], { type: "application/json" });
    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    // Use the desired local file path as the suggested download filename
    // Specify the desired local file path
    downloadLink.download = "../artifacts/myData.json";
    // Append the link to the document
    document.body.appendChild(downloadLink);
    // Trigger a click on the link to prompt the download
    downloadLink.click();
    // Remove the link from the document
    document.body.removeChild(downloadLink);

    navigate("/");
  } catch (error) {
    console.log("FETCH_FACE_VERIFICATION_DB API ERROR......", error);
    toast.error("Fetching DB Failed");
  }
  dispatch(setLoading(false));
  toast.dismiss(toastId);
};

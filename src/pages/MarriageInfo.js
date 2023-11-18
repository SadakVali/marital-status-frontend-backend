import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MarriageInfo = () => {
  const { confirmedMatchMarriageId, matchedCriminalsData } = useSelector(
    (state) => state.user
  );
  const [criminal, setCriminal] = useState(null);
  const [isVictimFemale, setVictimFemale] = useState(null);
  useEffect(() => {
    const criminal = matchedCriminalsData.filter(
      (person) => person._id === confirmedMatchMarriageId
    )[0];
    console.log(criminal);
    setCriminal(criminal);
    setVictimFemale(criminal?.criminalId?.gender === "Female" ? true : false);
  }, [confirmedMatchMarriageId, matchedCriminalsData]);
  const capitalizeWords = (str) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div
      className="min-h-[85vh] flex flex-col items-center gap-y-16 justify-center 
      text-[1.25rem] text-richblack-5 -mt-4"
    >
      {criminal && (
        <div className="flex flex-col justify-center items-center gap-y-8">
          <img
            src={criminal?.image}
            className="max-w-[500px] max-h-[500px]"
            loading="lazy"
          />
          {isVictimFemale ? (
            <div>
              <p>
                Husband Name :{" "}
                {capitalizeWords(criminal?.ciminalId.name.replace("_", " "))}
              </p>
              <p>Wife Name : {criminal?.victimName}</p>
              <p>Her Guardian Phone No : {criminal?.victimContactNumber}</p>
              <p>Marriage Date : {criminal?.marriageDate}</p>
            </div>
          ) : (
            <div>
              <p>Husband Name : {criminal?.victimName}</p>
              <p>
                Wife Name :{" "}
                {capitalizeWords(criminal?.ciminalId.name.replace("_", " "))}
              </p>
              <p>His Phone No : {criminal?.victimContactNumber}</p>
              <p>Marriage Date : {criminal?.marriageDate}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MarriageInfo;

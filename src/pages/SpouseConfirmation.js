import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FirstFancyBTN from "../components/common/FirstFancyBTN";
import { setConfirmedMatchMarriageId } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const SpouseConfirmation = () => {
  const { matchedCriminalsMarriageIds, matchedCriminalsData } = useSelector(
    (state) => state.user
  );
  const [showNextPhotos, setShowNextPhotos] = useState(false);
  const [nextCriminalDetails, setNextCriminalDetails] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [criminal, setCriminal] = useState(null);

  useEffect(() => {
    const criminal = matchedCriminalsData.filter(
      (person) => person._id === matchedCriminalsMarriageIds[0]
    )[0];
    console.log(criminal);
    setCriminal(criminal);
  }, [matchedCriminalsMarriageIds, matchedCriminalsData]);

  console.log(criminal);
  console.log(criminal?.ciminalId?.images);

  const onClickYes = (id) => {
    if (!showNextPhotos) {
      dispatch(setConfirmedMatchMarriageId(matchedCriminalsMarriageIds[0]));
    } else {
      dispatch(setConfirmedMatchMarriageId(id));
    }
    navigate("/spouse-marriage-info");
  };

  const onClickNo = () => {
    if (!showNextPhotos) {
      setShowNextPhotos(true);
      setNextCriminalDetails(
        matchedCriminalsData.filter(
          (person) => person._id !== matchedCriminalsMarriageIds[0]
        )
      );
    } else {
      navigate("/congratulations");
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-y-2 justify-center 
      font-caveat text-[3rem] min-h-[85vh] text-richblack-5 max-w-[100vw] overflow-hidden"
    >
      {!showNextPhotos ? (
        <div className="flex justify-center items-center -mt-10 flex-col gap-y-2">
          <p>Is this your Spouse?</p>
          <div className="flex justify-center items-center h-[420px] w-[300px]">
            {criminal?.ciminalId?.images && (
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-2xl mySwiper"
              >
                {criminal?.ciminalId?.images.map((image, id) => (
                  <SwiperSlide key={id}>
                    <img src={image} className="max-w-[320px] max-h-[420px]" />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      ) : nextCriminalDetails ? (
        <div className="flex justify-center items-center flex-col -mt-10 gap-y-2">
          <p>If One of the below is Your Spouse Click on it</p>
          <div
            className={`flex justify-center items-center gap-x-8 h-[420px] w-[1000px]`}
          >
            {nextCriminalDetails.map((criminal, index) => (
              <Swiper
                onClick={() => onClickYes(criminal._id)}
                key={index}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-2xl mySwiper max-w-[333px] !object-cover"
              >
                {criminal?.ciminalId?.images.map((image, id) => (
                  <SwiperSlide key={id} className="!object-cover">
                    <img
                      src={image}
                      className="max-w-[333px] max-h-[420px] !object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex gap-x-6 mt-4">
        {!showNextPhotos && <FirstFancyBTN text="Yes" onClick={onClickYes} />}
        <FirstFancyBTN text="No" onClick={onClickNo} />
      </div>
    </div>
  );
};

export default SpouseConfirmation;

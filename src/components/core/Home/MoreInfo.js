import Hacker from "../../../assets/images/Hacker.png";

const MoreInfo = () => {
  return (
    <div
      className="min-h-[110vh] flex flex-col items-center justify-center 
      w-11/12 max-w-maxContent mx-auto gap-y-8"
    >
      <div className="flex justify-center items-center gap-x-8 w-full mx-auto">
        <p
          className="font-caveat text-richblack-5 text-[2.5rem] text-center 
          leading-normal z-10"
        >
          To Know More Details Please Watch this Video
        </p>
        <img src={Hacker} className="h-[400px] w-[600px]" />
      </div>
      <p
        className="font-primary text-richblack-5 text-[1.5rem] text-center 
        leading-normal"
      >
        We are currently in the process of offering this software to the Indian
        Government, aiming to enhance the world we live in. Privacy concerns
        need not be a worry, as we do not access any of your personal
        information on our end.
      </p>
    </div>
  );
};

export default MoreInfo;

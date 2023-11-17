import { Link } from "react-router-dom";

const FraudMen = () => {
  return (
    <div
      className="min-h-[100vh] flex flex-col items-center gap-y-16 
      justify-center relative w-11/12 max-w-maxContent mx-auto"
    >
      <p className="font-accent text-richblack-5 text-[2rem] leading-none text-center">
        One Such Recent Activity Reported on Quint . Fraud by a Man on 15 well
        Educated Women
      </p>
      <div className="flex flex-col gap-y-8 w-full mx-auto">
        <p className="font-montserrat text-richblack-5 text-[1.125rem] leading-normal">
          Mysuru Police arrested Mahesh on Sunday, 9 July 2023 after a complaint
          from a software engineer he met on Shaadi.com in August 2022.
          According to her complaint, Mahesh – after their 'wedding' – demanded
          a loan of Rs 10 lakh from her "to start a clinic," and threatened to
          kill her if she didn't pay him. She also accused him of stealing Rs 15
          lakh and 20 tola (233.2 gm) of gold from her before absconding.
        </p>
        <p className="font-montserrat text-richblack-5 text-[1.125rem] leading-normal">
          SI Radha further said that one of the women he married was a doctor
          and that he allegedly used her clinic to click photos of himself as a
          'doctor', so he could trap other women using those photos. The first
          woman he 'married' – that they know of – had filed a complaint against
          him in Bengaluru in 2013 after he absconded. From 3 women, he
          allegedly stole Rs 3 crore INR.
        </p>
        <p className="font-montserrat text-richblack-5 text-[1.125rem] leading-normal">
          Mysuru Police arrested Mahesh on Sunday, 9 July 2023 after a complaint
          from a software engineer he met on Shaadi.com in August 2022. Mahesh
          was found to have married women across various parts of
          Karnataka(Mysuru, Mandya, Bengaluru, and Mangaluru), Andhra Pradesh,
          and Maharashtra, amassing four children from these relationships.
        </p>
        <div className="flex flex-col justify-end">
          <p className="font-inter text-richblack-500 text-right text-[1rem] leading-tight">
            CREDITS
          </p>
          <p className="font-inter text-richblack-500 text-right text-[1rem] leading-tight">
            Link to the official article
          </p>
          <Link
            target="_blank"
            to="https://www.thequint.com/news/crime/bengaluru-conman-married-women-stole-gold-absconded-now-arrested"
            className="font-inter text-richblack-500 text-right text-[1rem] leading-tight"
          >
            https://www.thequint.com/news/crime/bengaluru-conman-married-women-stole-gold-absconded-now-arrested
          </Link>
          <p className="font-inter text-richblack-500 text-right text-[1rem] leading-tight">
            Link to the official youtube video
          </p>
          <Link
            target="_blank"
            to="https://www.youtube.com/watch?v=n2b9Nd-uDHU&t=61s"
            className="font-inter text-richblack-500 text-right text-[1rem] leading-tight"
          >
            https://www.youtube.com/watch?v=n2b9Nd-uDHU&t=61s
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FraudMen;

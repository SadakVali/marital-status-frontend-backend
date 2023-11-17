import { Link } from "react-router-dom";

const FraudWomen = () => {
  return (
    <div
      className="min-h-[100vh] flex flex-col items-center gap-y-16 
      justify-center relative w-11/12 max-w-maxContent mx-auto"
    >
      <p className="font-accent text-richblack-5 text-[2rem] leading-none text-center">
        One Such Recent Activity Reported on dailyo.in, Fraud by a Woman on 27
        wealthy Men
      </p>
      <div className="flex flex-col gap-y-8 w-full mx-auto">
        <p className="font-montserrat text-richblack-5 text-[1.125rem] leading-normal">
          A woman from Budgam district in Jammu and Kashmir has conned 27 men in
          a shocking case of fraud. She managed to marry these men, spending
          around 10-20 days with each, before disappearing with their jewelry,
          cash, and belongings.
        </p>
        <p className="font-montserrat text-richblack-5 text-[1.125rem] leading-normal">
          This woman is allegedly part of a larger scheme involving brokers who
          arrange marriages with wealthy men for substantial dowries. The scam
          was uncovered when more than 12 men reported their missing wives to
          the police, all having photographs of the same woman.
        </p>
        <p className="font-montserrat text-richblack-5 text-[1.125rem] leading-normal">
          The woman would vanish after marriage, usually claiming to visit her
          parents' house, leaving her husbands deceived and robbed. A lawyer
          filed an FIR, suspecting a broader operation with multiple accomplices
          and aliases used by the woman on marriage documents. It's estimated
          that this woman has victimized 27 men in Budgam district alone, with
          the total number of victims in other districts remaining uncertain.
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
            to="https://www.dailyo.in/news/how-kashmirs-runaway-bride-conned-27-men-40601"
            className="font-inter text-richblack-500 text-right text-[1rem] leading-tight"
          >
            https://www.dailyo.in/news/how-kashmirs-runaway-bride-conned-27-men-40601
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FraudWomen;

import React from "react";
import FirstFancyBTN from "../components/common/FirstFancyBTN";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// import CheckboxInputField from "../components/core/StatusForm/CheckboxInputField";
import Upload from "../components/core/StatusForm/Upload";
import { checkMaritalStatusOfPerson } from "../services/operations/userAPI";
import { useNavigate } from "react-router-dom";

const MarriageInfo = () => {
  const {
    register,
    handleSubmit,
    setValue,
    // getValues,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const formData = new FormData();
    for (const iterator of data.file) formData.append("file", iterator);
    dispatch(checkMaritalStatusOfPerson(formData, navigate));
  };

  return (
    <div
      className="min-h-[80vh] flex flex-col items-center gap-y-16 justify-center 
      font-montserrat text-[5rem]"
    >
      <form
        className="flex flex-col justify-center gap-y-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Upload
          label="Add Your Spouse's Single Frontal Face Image"
          name="file"
          register={register}
          setValue={setValue}
          errors={errors}
          video={false}
        />
        {/* <CheckboxInputField
          getValues={getValues}
          errors={errors}
          register={register}
          setValue={setValue}
          label="Your Spouse is Male or Female?"
          inTagsNamePlaceholderObject={[
            {
              inTagName: "gender",
              inTagplaceholder: "Male",
            },
            {
              inTagName: "gender",
              inTagplaceholder: "Female",
            },
          ]}
        /> */}
        <FirstFancyBTN text="Check Status" />
      </form>
    </div>
  );
};

export default MarriageInfo;

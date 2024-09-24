import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Button } from "@mui/material";

const RenderFormFields = ({
  handleClose,
  onSubmit,
  data = null,
  Component,
  FormValues,
  ...rest
}) => {
  const form = useForm<typeof FormValues>({
    defaultValues: data
      ? {
          ...data,
        }
      : {},
  });
  console.log("sjhsjsss", data);
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
    trigger,
  } = form;

  const { errors, isSubmitting } = formState;

  const onSubmitHandler: SubmitHandler<typeof FormValues> = (data) => {
    console.log("shjsss", data);
    onSubmit(data);
    handleClose();
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4  justify-center items-center "
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-2 w-full">
          <Component
            control={control}
            data={data}
            errors={errors}
            register={register}
            watch={watch}
            setValue={setValue}
            {...rest}
          />
        </div>
        <div className="flex justify-end gap-2 w-full mt-4">
          <Button
            color="error"
            variant="contained"
            type="reset"
            className="w-full"
            onClick={() => reset()}
          >
            Reset
          </Button>
          <Button
            color="primary"
            type="submit"
            className="w-full"
            variant="contained"
            loading={isSubmitting}
          >
            Save
          </Button>
        </div>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default RenderFormFields;

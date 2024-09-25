import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Button } from "@mui/material";

const RenderFormFields = ({
  handleClose,
  onSubmit,
  data = null,
  Component,
  ...rest
}) => {
  const form = useForm({
    defaultValues: data
      ? {
          ...data,
        }
      : {},
  });
  const { register, control, handleSubmit, formState, watch, setValue, reset } =
    form;

  const { errors } = formState;

  const onSubmitHandler = (data) => {
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
        <div className="flex justify-end gap-2  mt-4  w-full">
          <Button
            color="error"
            variant="contained"
            type="reset"
            onClick={() => reset()}
          >
            Reset
          </Button>
          <Button color="primary" type="submit" variant="contained">
            Save
          </Button>
        </div>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default RenderFormFields;

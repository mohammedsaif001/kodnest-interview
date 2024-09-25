"use client";

import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "../mui/forms/InputField";
import axios from "axios";
import { showToast } from "@/utils";

export type FormValues = {
  email: string;
  password: string;
};
const LoginFrom = () => {
  const form = useForm();
  const router = useRouter();
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      const { data: res } = await axios.post("/api/login", data);

      if (res?.status === 200) {
        showToast("success", "Logged In Successfully");
        router.push("/dashboard");
      } else {
        showToast("error", res.error);
      }
    } catch (error) {
      console.error("Something Went Wrong", error.message);
      showToast("error", "Something Went Wrong");
    }
  };

  return (
    <Box className="flex h-max  flex-col justify-center gap-4 bg-[#FFFFFF] px-5 md:px-10 rounded-lg py-6">
      <Typography variant="h5" className="h-max ml-3" color={"#2B2E48"}>
        Login
      </Typography>
      <form
        className="flex flex-col items-center  justify-center gap-4 m-2"
        onSubmit={handleSubmit(onSubmit)}
        // noValidate
      >
        <div className="-ml-3 flex w-full flex-col gap-2">
          <InputField
            name="email"
            type="email"
            fullWidth={true}
            label="Email"
            register={(name) =>
              register(name, {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
              })
            }
            errors={errors}
            required={true}
          />
          <InputField
            label="Password"
            required={true}
            fullWidth
            name="password"
            type="password"
            register={(name) =>
              register(name, {
                required: {
                  value: true,
                  message: "Password is Required",
                },
              })
            }
            errors={errors}
          />
        </div>

        <Button color="primary" variant="contained" type="submit" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginFrom;

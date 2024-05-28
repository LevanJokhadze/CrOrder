import { useState } from "react";
import bglogin from "images/bg-login.png";
import Reset from "./Reset";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EMAIL_PATTERN } from 'utils/constants'; 

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  const onSubmit = () => {
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <img className="col-6 p-0" src={bglogin} alt="background" />
          <div className="col-6 bg-auth">
            <div className="max-w-525 ml-60">
              <h3 className=" font-30 darkblue my-60">Log in</h3>
              <form
                className="mt-38 font-md f-light d-flex flex-column  text-black "
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className="d-flex flex-column mb-3">
                  <label
                    htmlFor="email"
                    className={`opacity-75 mb-1 font-15 ${
                      errors.email ? "text-danger" : ""
                    }`}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    className={`input-border form-control h-40 bg-form ${
                      errors.email ? "border-danger" : ""
                    }`}
                    id="email"
                    {...register("email", EMAIL_PATTERN)}
                  />
                </div>
                <div className="d-flex flex-column mb-2">
                  <label
                    htmlFor="password"
                    className={`opacity-75 mb-1 font-15 ${
                      errors.password ? "text-danger" : ""
                    }`}
                  >
                    Password *
                  </label>
                  <input
                    type="password"
                    className={`input-border form-control h-40 bg-form ${
                      errors.password ? "border-danger" : ""
                    }`}
                    id="password"
                    {...register("password", { required: true })}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-130">
                  <div className="d-flex align-items-center flex-row">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="me-2 checkbox"
                    />
                    <label htmlFor="rememberMe" className="opacity-75 font-15">
                      Remember me
                    </label>
                  </div>
                  <div
                    className="text-decoration-none opacity-75 font-15 f-bold lightblue pointer"
                    onClick={handleOpenModal}
                  >
                    Forgot password?
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn bg-shadeblue text-white font-small rounded-1 pd-1 mb-5 f-normal"
                >
                  Sign in
                </button>
              </form>
              <hr
                style={{
                  width: "345px",
                  height: "3px",
                  backgroundColor: "black",
                  margin: "0px auto 11px",
                }}
              />
              <p className="font-15 f-light text-center text-black opacity-75 mb-5">
                Don&apos;t have an account yet?
                <Link to="/register" className="f-bold lightblue pointer">
                  {" "}
                  Sign up
                </Link>
              </p>
            </div>
            <Reset showModal={showModal} handleClose={handleCloseModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

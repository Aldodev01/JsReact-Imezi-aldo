import { Button } from "antd";
import React from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/lottie/notfound.json";
import "./Error.less";

const NotFound = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="error-wrapper">
      <Lottie options={defaultOptions} width={500} height={400} />
      <h1 className="error-404">
        Sorry Mr/Mrs I didn't found what yours search 🙁{" "}
        <Button type="danger" onClick={() => navigate(-2)}>
          Go Back
        </Button>
      </h1>
    </div>
  );
};

export default NotFound;

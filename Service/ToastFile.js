import { toast, Zoom } from "react-toastify";

const  toastFile = (type, message) =>{
  if (type == "error") {
    toast.error(
      <>
        <h6>Error</h6>
        <p style={{ fontSize: 13, lineHeight: "17px" }}>{message}</p>
      </>,
      {
        transition: Zoom,
        // toastId: "error1",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  } else if (type == "success") {
    toast.success(
      <>
        <h6>Success</h6>
        <p style={{ fontSize: 13, lineHeight: "17px" }}>{message}</p>
      </>,
      {
        transition: Zoom,
        // toastId: "success1",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  } else if (type == "info") {
    toast.info(
      <>
        <h6>Info</h6>
        <p style={{ fontSize: 13, lineHeight: "17px" }}>{message}</p>
      </>,
      {
        transition: Zoom,
        // toastId: "info1",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  } else if (type == "warning") {
    toast.warning(
      <>
        <h6>Warning</h6>
        <p style={{ fontSize: 13, lineHeight: "17px" }}>{message}</p>
      </>,
      {
        transition: Zoom,
        // toastId: "warning1",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  }
}
export default toastFile;
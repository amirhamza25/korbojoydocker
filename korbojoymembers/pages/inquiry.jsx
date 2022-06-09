import axios from "axios";
import { getCookies } from "cookies-next";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import formValueAppend from "../commonFunction/formValueAppend";
import fromValueUpdate from "../commonFunction/onChangeHandle";
import useScript from "../commonFunction/ReloadJs";

const Inquiry = () => {
  useScript("/assets/js/app.js");

  const MySwal = withReactContent(Swal);

  const [slider, updateSlider] = useState();
  const changeStateUpdateHandler = (e) => {
    fromValueUpdate(e, updateSlider);
  };
  const [file, setFile] = useState("");
  const fileRead = (e) => {
    setFile(e.target.files[0]);
  };

  // const [token, setToken] = useState("")
  // useEffect(()=>{
  //   const tokens= getCookies('token')
  //   const decodedToken= jwtDecode(tokens.token)
  //   setToken(decodedToken)
  // },[])
  const [token, setToken] = useState("");
  useEffect(() => {
    const tokens = getCookies("token");

    const decodedToken = jwtDecode(tokens.token);
    setToken(decodedToken);
  }, []);
  console.log(token);
  const sliderHandleSubmit = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("imgs", file);
    formData.append("userId", token.userId);
    formValueAppend(formData, slider);

    const response = await axios
      .post(process.env.API_URL + "/userPanel/v1/InquerySubmit", formData)
      .then((response) => {
        MySwal.fire("Good job!", "Inquiry added successfully", "success");
      })
      .catch((error) => {
        MySwal.fire("Inquiry not saved!", "Something Error Found.", "warning");
      });
  };

  return (
    <div className="row">
      <div className="col-md-12 m-b-30">
        <div className="card card-statistics">
          <div className="card-header">
            <div className="card-heading">
              <h4 className="card-title">Add Inquiry</h4>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={sliderHandleSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label" htmlFor="title">
                      Subject
                    </label>
                    <div className="mb-2">
                      <input type="text" className="form-control" name="subject" onChange={changeStateUpdateHandler} placeholder="subject" />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label className="control-label" htmlFor="fname">
                      Short discription
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        name="shortDiscriptions"
                        onChange={changeStateUpdateHandler}
                        placeholder="Short discription"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label" htmlFor="lname">
                      Picture
                    </label>
                    <div className="mb-2">
                      <input multiple type="file" className="form-control" name="imgs" onChange={fileRead} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary" name="signup" value="Submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;

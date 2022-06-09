import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import formValueAppend from "../commonFunction/formValueAppend";
import fromValueUpdate from "../commonFunction/onChangeHandle";

function Profile() {
  const MySwal = withReactContent(Swal);
  const [product, upadateProductState] = useState("");

  const categoryHandleChange = (e) => {
    fromValueUpdate(e, upadateProductState);
  };
  const [file, setFile] = useState("");
  const fileRead = (e) => {
    setFile(e.target.files[0]);
    // console.log(setFile);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("img", file);
    formValueAppend(formData, product);

    // you need to append when you send extra value and any file
    formValueAppend(formData, product);
    // const response = await axios
    //   .post(process.env.API_URL + "/AddProduct", formData)
    //   .then((response) => {
    //     MySwal.fire("Good job!", "Product added successfully", "success");
    //   })
    //   .catch((error) => {
    //     MySwal.fire("Product not saved!", "Something Error Found.", "warning");
    //   });
    console.log(product);
  };
  return (
    <div>
      <div>
        <title>Mentor - Bootstrap 4 Admin Dashboard Template</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Admin template that can be used to build dashboards for CRM, CMS, etc." />
        <meta name="author" content="Potenza Global Solutions" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* app favicon */}
        <link rel="shortcut icon" href="assets/img/favicon.ico" />
        {/* google fonts */}
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
        {/* plugin stylesheets */}
        <link rel="stylesheet" type="text/css" href="assets/css/vendors.css" />
        {/* app style */}
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        {/* begin app */}
        <div className="">
          <div className="">
            {/* begin app-nabar */}

            {/* end app-navbar */}
            {/* begin app-main */}

            {/* begin container-fluid */}
            <div className="">
              {/* begin row */}
              <div className="row">
                <div className="col-md-12 m-b-30">
                  {/* begin page title */}
                  <div className="d-block d-sm-flex flex-nowrap align-items-center">
                    <div className="page-title mb-2 mb-sm-0">
                      <h1>Account Settings</h1>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                      <nav>
                        <ol className="breadcrumb p-0 m-b-0">
                          <li className="breadcrumb-item">
                            <a href="index.html">
                              <i className="ti ti-home" />
                            </a>
                          </li>
                          <li className="breadcrumb-item">Pages</li>
                          <li className="breadcrumb-item active text-primary" aria-current="page">
                            Account Settings
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                  {/* end page title */}
                </div>
              </div>
              {/* end row */}
              {/*mail-Compose-contant-start*/}
              <div className="row account-contant">
                <div className="col-12">
                  <div className="card card-statistics">
                    <div className="card-body p-0">
                      <div className="row no-gutters">
                        <div className="col-xl-3 pb-xl-0 pb-5 border-right">
                          <div className="page-account-profil pt-5">
                            <div className="profile-img text-center rounded-circle">
                              <div className="pt-5">
                                <div className="bg-img m-auto">
                                  <img src="assets/img/avtar/01.jpg" className="img-fluid" alt="users-avatar" />
                                </div>
                                <div className="profile pt-4">
                                  <h4 className="mb-1">Alice Williams</h4>
                                  <p>Enthusiast</p>
                                </div>
                              </div>
                            </div>
                            <div className="py-5 profile-counter">
                              <ul className="nav justify-content-center text-center">
                                <li className="nav-item border-right px-3">
                                  <div>
                                    <h4 className="mb-0">90</h4>
                                    <p>Post</p>
                                  </div>
                                </li>
                                <li className="nav-item border-right px-3">
                                  <div>
                                    <h4 className="mb-0">1.5K</h4>
                                    <p>Messages</p>
                                  </div>
                                </li>
                                <li className="nav-item px-3">
                                  <div>
                                    <h4 className="mb-0">4.4K</h4>
                                    <p>Members</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="profile-btn text-center">
                              <div>
                                <button className="btn btn-light text-primary mb-2">Upload New Avatar</button>
                              </div>
                              <div>
                                <button className="btn btn-danger">Delete</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-md-6 col-12 border-t border-right">
                          <div className="page-account-form">
                            <div className="form-titel border-bottom p-3">
                              <h5 className="mb-0 py-2">Edit Your Personal Settings</h5>
                            </div>
                            <div className="p-4">
                              <form onSubmit={onSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
                                <div className="form-row">
                                  <div className="form-group col-md-12">
                                    <label htmlFor="name1">Full Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="name1"
                                      name="name"
                                      onChange={categoryHandleChange}
                                      defaultValue="Alice Williams"
                                    />
                                  </div>

                                  <div className="form-group col-md-12">
                                    <label htmlFor="phone1">Phone Number</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="phone1"
                                      name="number"
                                      onChange={categoryHandleChange}
                                      defaultValue="(01) 97 563 15613"
                                    />
                                  </div>
                                  <div className="form-group col-md-12">
                                    <label htmlFor="email1">Email</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="email1"
                                      name="email"
                                      onChange={categoryHandleChange}
                                      defaultValue="alicewilliams@gmail.com"
                                    />
                                  </div>

                                  <div className="form-group col-md-12">
                                    <label htmlFor="Nid">Nid</label>
                                    <input type="text" className="form-control" id="add1" defaultValue="151" name="nidNumber" onChange={categoryHandleChange} />
                                  </div>

                                  <div className="form-group col-md-12">
                                    <label htmlFor="add2">permanentaddress</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="add2"
                                      defaultValue="1234 North Avenue Luke Lane, South Bend, IN 360001"
                                      name="permanentAddress"
                                      onChange={categoryHandleChange}
                                    />
                                  </div>

                                  <div className="form-group col-md-12">
                                    <label htmlFor="add2">Districts</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="add2"
                                      defaultValue="districts"
                                      onChange={categoryHandleChange}
                                      name="district"
                                    />
                                  </div>

                                  <div className="form-group col-md-12">
                                    <label htmlFor="add2">Upazila</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="add2"
                                      defaultValue="upazila"
                                      onChange={categoryHandleChange}
                                      name="upazila"
                                    />
                                  </div>

                                  <div className="form-group col-md-12">
                                    <label htmlFor="add2">Division</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="add2"
                                      defaultValue="division"
                                      onChange={categoryHandleChange}
                                      name="division"
                                    />
                                  </div>
                                  <div className="form-group col-md-12">
                                    <label htmlFor="add2">CompanyName</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="add2"
                                      defaultValue="companyName"
                                      onChange={categoryHandleChange}
                                      name="companyName"
                                    />
                                  </div>
                                  <div className="form-group col-md-12">
                                    <label htmlFor="add2">OfficeAddress</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="add2"
                                      defaultValue="officeAddress"
                                      onChange={categoryHandleChange}
                                      name="officeAddress"
                                    />
                                  </div>

                                  <div className="form-group col-md-12">
                                    <div className="form-check">
                                      <input className="form-check-input" type="checkbox" id="gridCheck" />
                                      <label className="form-check-label" htmlFor="gridCheck">
                                        I agree to receive email notification.
                                      </label>
                                    </div>
                                  </div>
                                  <button type="submit" className="btn btn-primary">
                                    Update Information
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*mail-Compose-contant-end*/}
            </div>
            {/* end container-fluid */}
          </div>
          {/* end app-main */}
        </div>
        {/* end app-container */}
        {/* begin footer */}
        <footer className="footer">
          <div className="row">
            <div className="col-12 col-sm-6 text-center text-sm-left">
              <p>© Copyright 2019. All rights reserved.</p>
            </div>
            <div className="col  col-sm-6 ml-sm-auto text-center text-sm-right">
              <p>
                <a>Templates Hub</a>
              </p>
            </div>
          </div>
        </footer>
        {/* end footer */}
      </div>
      {/* end app-wrap */}

      {/* end app */}
      {/* plugins */}
      {/* custom app */}
    </div>
  );
}

export default Profile;

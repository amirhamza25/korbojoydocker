import axios from "axios";
import { setCookies } from "cookies-next";
import Link from "next/link";
import { useState } from "react";
import fromValueUpdate from "../commonFunction/onChangeHandle";
import useScript from "../commonFunction/ReloadJs";
function login(props) {
  useScript("/assets/js/main.min.js");

  const [login, updateLoginFrom] = useState("");

  const categoryHandleChange = (e) => {
    fromValueUpdate(e, updateLoginFrom);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await axios
      .post(process.env.API_URL + "/api/ev1/UserLogin", login)
      .then((response) => {
        setCookies("token", response.data);
        const url = "http://localhost:3000";
        // const url = "/";
        // const url = "/";
        window.location.href = url;
      })
      .catch((error) => {
        console.log("do not login");
      });
  };

  return (
    <div>
      {/* Start of Main */}
      <main className="main login-page">
        {/* Start of Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">My Account</h1>
          </div>
        </div>
        {/* End of Page Header */}
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>My account</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        <div className="page-content">
          <div className="container">
            <div className="login-popup">
              <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                <ul className="nav nav-tabs text-uppercase" role="tablist">
                  <li className="nav-item">
                    <a href="#sign-in" className="nav-link active">
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#sign-up" className="nav-link">
                      Sign Up
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <form onSubmit={onSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
                    <div className="form-group">
                      <label>Username or email address *</label>
                      <input type="text" className="form-control" name="username" id="username" required onChange={categoryHandleChange} />
                    </div>
                    <div className="form-group mb-0">
                      <label>Password *</label>
                      <input type="text" className="form-control" name="password" id="password" required onChange={categoryHandleChange} />
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn btn-primary" name="signup" value="Submit">
                        Submit
                      </button>
                    </div>
                  </form>

                  <div className="tab-pane" id="sign-up">
                    <div className="form-group">
                      <label>Your email address *</label>
                      <input type="text" className="form-control" name="email_1" id="email_1" required />
                    </div>
                    <div className="form-group mb-5">
                      <label>Password *</label>
                      <input type="text" className="form-control" name="password_1" id="password_1" required />
                    </div>
                    <div className="checkbox-content login-vendor">
                      <div className="form-group mb-5">
                        <label>First Name *</label>
                        <input type="text" className="form-control" name="first-name" id="first-name" required />
                      </div>
                      <div className="form-group mb-5">
                        <label>Last Name *</label>
                        <input type="text" className="form-control" name="last-name" id="last-name" required />
                      </div>
                      <div className="form-group mb-5">
                        <label>Shop Name *</label>
                        <input type="text" className="form-control" name="shop-name" id="shop-name" required />
                      </div>
                      <div className="form-group mb-5">
                        <label>Shop URL *</label>
                        <input type="text" className="form-control" name="shop-url" id="shop-url" required />
                        <small>https://d-themes.com/wordpress/wolmart/demo-1/store/</small>
                      </div>
                      <div className="form-group mb-5">
                        <label>Phone Number *</label>
                        <input type="text" className="form-control" name="phone-number" id="phone-number" required />
                      </div>
                    </div>
                    <div className="form-checkbox user-checkbox mt-0">
                      <input type="checkbox" className="custom-checkbox checkbox-round active" id="check-customer" name="check-customer" required />
                      <label htmlFor="check-customer" className="check-customer mb-1">
                        I am a customer
                      </label>
                      <br />
                      <input type="checkbox" className="custom-checkbox checkbox-round" id="check-seller" name="check-seller" required />
                      <label htmlFor="check-seller" className="check-seller">
                        I am a vendor
                      </label>
                    </div>
                    <p>
                      Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other
                      purposes described in our{" "}
                      <a href="#" className="text-primary">
                        privacy policy
                      </a>
                      .
                    </p>
                    <a href="#" className="d-block mb-5 text-primary">
                      Signup as a vendor?
                    </a>
                    <div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
                      <input type="checkbox" className="custom-checkbox" id="remember" name="remember" required />
                      <label htmlFor="remember" className="font-size-md">
                        I agree to the{" "}
                        <a href="#" className="text-primary font-size-md">
                          privacy policy
                        </a>
                      </label>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Sign Un
                    </a>
                  </div>
                </div>
                <p className="text-center">Sign in with social account</p>
                <div className="social-icons social-icon-border-color d-flex justify-content-center">
                  <a href="#" className="social-icon social-facebook w-icon-facebook" />
                  <a href="#" className="social-icon social-twitter w-icon-twitter" />
                  <a href="#" className="social-icon social-google fab fa-google" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* End of Main */}
    </div>
  );
}

export default login;

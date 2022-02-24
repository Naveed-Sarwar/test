import React from "react";
import "./Home.css";
import { Col, Row, Container, Button } from "react-bootstrap";
const Home = () => {
  return (
    <div className="home_page">
      <Container fluid>
        <Row>
          <Col sm={12} md={3} lg={3}>
            <p className="back_to_dashboard">Back To dashboard </p>
            <h2 className="add_member"> Add member </h2>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col sm={0} md={2} lg={2}></Col>
          <Col className="info_section" sm={12} md={5} lg={5}>
            <fieldset>
              <legend>
                {" "}
                <h6 className="heading_text">Personal Info</h6>
              </legend>
              <Row>
                {" "}
                <Col sm={12} md={6} lg={6}>
                  <select className="title" name="country">
                    <option value="australia">Select a title</option>
                    <option value="canada"></option>
                    <option value="usa">USA</option>
                  </select>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <label for="fname">
                    Last name <span>*</span>
                  </label>
                  <br />
                  <input type="text" id="fname" name="fname" />
                </Col>
              </Row>
              <Row>
                {" "}
                <Col sm={12} md={6} lg={6}>
                  <label for="fname">
                    First Name <span>*</span>
                  </label>
                  <br />
                  <input type="text" id="fname" name="fname" />
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <label for="fname">Middle name:</label>
                  <br />
                  <input type="text" id="fname" name="fname" />
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <label for="fname">Suffix (type in custom sufix)</label>
                  <br />
                  <input
                    className="large_inputs"
                    type="text"
                    id="fname"
                    name="fname"
                  />
                </Col>
                <Col sm={12} md={12} lg={12}>
                  {" "}
                  <label for="lname">Address(1)</label> <br />
                  <input
                    className="large_inputs"
                    type="text"
                    id="lname"
                    name="lname"
                  />
                  <br />
                </Col>{" "}
                <br />
                <Col sm={12} md={12} lg={12}>
                  {" "}
                  <label for="lname">Address(2)</label> <br />
                  <input
                    className="large_inputs"
                    type="text"
                    id="lname"
                    name="lname"
                  />
                  <br />
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <label for="fname">Zip Code</label>
                  <br />
                  <input type="text" id="fname" name="fname" />
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <label for="fname">State</label>
                  <br />
                  <input type="text" id="fname" name="fname" />
                </Col>
              </Row>{" "}
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <label for="fname">City</label>
                  <br />
                  <input type="text" id="fname" name="fname" />
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <label for="fname">
                    Social Security# <span>*</span>
                  </label>
                  <br />
                  <input type="text" id="fname" name="fname" />
                </Col>
              </Row>
              <Row>
                {" "}
                <Col sm={12} md={6} lg={6}>
                  <label for="fname">Employee Number</label>
                  <br />
                  <input type="number" id="fname" name="fname" />
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <label for="fname">
                    IAFF# <span>*</span>
                  </label>
                  <br />
                  <input type="text" id="fname" name="fname" />
                </Col>
              </Row>
            </fieldset>
          </Col>
          <Col className="info_section" sm={12} md={5} lg={5}>
            <h6 className="heading_text">Member Status</h6>
            <Row>
              {" "}
              <Col sm={12} md={6} lg={6}>
                <label class="check">
                  Initialized<span>*</span>
                  <input type="radio" checked="checked" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <label class="check">
                  Transferred In <span>*</span>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
              </Col>
            </Row>
            <h6 className="heading_text">Demographics</h6>
            <Row>
              {" "}
              <Col sm={12} md={6} lg={6}>
                <label for="fname">Date of Birth <span>*</span></label>
                <br />
                <input type="text" id="fname" name="fname" />
              </Col>
              <Col sm={12} md={6} lg={6}>
                <label for="fname">Join Date <span>*</span></label>
                <br />
                <input type="text" id="fname" name="fname" />
              </Col>
            </Row>
            <Row>
              {" "}
              <Col sm={12} md={6} lg={6}>
                  <select className="title" name="country">
                    <option value="australia">Gender</option>
                    <option value="canada">Male</option>
                    <option value="usa">Female</option>
                  </select>
              </Col>
              <Col sm={12} md={6} lg={6}>
              <select className="title" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                  </select>
              </Col>
            </Row>
            <h6 className="heading_text">Job Info</h6>
            <Row>
              {" "}
              <Col sm={12} md={6} lg={6}>
                <label for="fname">
                  Original Hire <span>*</span>
                </label>
                <br />
                <input type="text" id="fname" name="fname" />
              </Col>
              <Col sm={12} md={6} lg={6}>
                <label for="fname">Badge #</label>
                <br />
                <input type="text" id="fname" name="fname" />
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <label for="fname">Position</label>
                <br />
                <input type="text" id="fname" name="fname" />
              </Col>
            </Row>{" "}
            <Row>
              <Col sm={12} md={12} lg={12}>
                <label for="fname">Sick Plan</label>
                <br />
                <input type="text" id="fname" name="fname" />
              </Col>
            </Row>{" "}
            <h6 className="heading_text">Contact Details</h6>
            <Row>
              {" "}
              <Col sm={12} md={6} lg={6}>
                <label for="fname">Home Phone</label>
                <br />
                <input type="text" id="fname" name="fname" />
              </Col>
              <Col sm={12} md={6} lg={6}>
                <label for="fname">Cell Phone</label>
                <br />
                <input type="text" id="fname" name="fname" />
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={12}>
                <label for="fname">
                  Email Address <span>*</span>
                </label>
                <br />
                <input
                  className="large_inputs"
                  type="text"
                  id="fname"
                  name="fname"
                />
              </Col>
            </Row>{" "}
            <Row>
              <Col>
                <Button md={2} lg={2} variant="danger">
                  Create
                </Button>
              </Col>
              <Col>
                {" "}
                <Button md={2} lg={2} variant="secondary">
                  Close
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
{
  /* <form
onSubmit={(event) => {
  event.preventDefault();
}}
>
<div className="form-row">
  <div className="form-group col-md-3">
    <label htmlFor="userName">Full Name</label>
    <input
      type="text"
      className="form-control"
      id="userName"
      placeholder="Enter Your Full Name"
      
      required
    />
  </div>
  <div className="form-group col-md-3">
    <label htmlFor="userEmail">Email</label>
    <input
      type="email"
      className="form-control"
      id="userEmail"
      placeholder="Enter  Email"
      
      required
    />
  </div>
</div>
<div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="userPassword">Password</label>
    <span className="password-toogle-icon-signup">
     
    </span>
    <input

      className="form-control"
      id="userPassword"
      placeholder="Create Your Password"
                    required
    />
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="userConfirmPassword">Confirm Password</label>
    <span className="password-toogle-icon-signup">
     
    </span>
    <input

      className="form-control"
      id="userConfirmPassword"
      placeholder="Confirm Your Password"
      required
    />
  </div>
</div>
<div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="userPhoneNumber">Phone Number</label>
    <input
      type="number"
      className="form-control"
      id="userPhoneNumber"
      placeholder="Your Phone Number"
      
      required
    />
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="userCountry">Country</label>
    <input
      type="text"
      className="form-control"
      id="userCountry"
      placeholder="Your Country Name"
     
      required
    />
  </div>
</div>
<div className="form-row">
  <div className="form-group col-md-4">
    <label htmlFor="userCity">City</label>
    <input
      type="text"
      className="form-control"
      id="userCity"
      placeholder="Your City Name"
      required
    />
  </div>
  <div className="form-group col-md-3">
    <label htmlFor="userGender">Gender</label>
    <select
      id="userGender"
      className="form-control"
    >
      Choose
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
  </div>

</div>
<div className="form-group">
  <div className="custom-control custom-checkbox">
    <input
      type="checkbox"
      className="custom-control-input"
      id="userTNC"
      required
    />
    <label className="custom-control-label" htmlFor="userTNC">
      Accept Terms and Conditions
    </label>
  </div>
</div>
<p className="text-danger"> </p>
 </form> */
}

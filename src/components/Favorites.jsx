import React, { Component } from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import logo from "./images/gitwisecat.png";

class Favorites extends Component {
  render() {
    return (
      <div>
        <Container className="border mx-auto" style={{ height: "700px" }}>
          <Row className="">
            <Col
              className="bg-light border-right text-center"
              sm={4}
              md={2}
              style={{ height: "700px", color: "gray" }}
            >
              <Col xs={3} md={4}>
                <img
                  alt=""
                  src={logo}
                  width="100"
                  height="100"
                  className="rounded-circle ml-4 mt-3"
                />
              </Col>
              <Link to="/" alt="userhome">
                NAME
              </Link>{" "}
              <br />
              <Link to="GitHub URL">GITHUB LINK</Link> <br />
              <Link eventKey="disabled" disabled>
                FAVES
              </Link>{" "}
              <br />
              <Link to="/newsearch">SEARCH</Link>
            </Col>
            <Col className="text-center mt-5" sm={8} md={10}>
              <h1>FAVORITES</h1>
              <hr />
              <Col
                className="mx-auto"
                style={{ height: "500px", width: "700px", overflowY: "scroll" }}
              >
                <ul className="list-unstyled">
                  <Media as="li" className="border-bottom mb-2">
                    <img
                      width={64}
                      height={64}
                      className="mr-3 roundedCircle"
                      src={logo}
                      alt=""
                    />
                    <Media.Body>
                      <Row>
                        <Col>
                          <h6>NAME OF REPO</h6>
                        </Col>
                        <Col>
                          <h6>USER</h6>
                        </Col>
                        <Col>
                          <h6>SCORE</h6>
                        </Col>
                        <Col className="text-right">
                          <i
                            className="fas fa-star fa-2x"
                            style={{ color: "#d9c158" }}
                          />
                        </Col>
                      </Row>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo. Cras purus
                        odio, vestibulum in vulputate at, tempus viverra turpis.
                        Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                    </Media.Body>
                  </Media>

                  <Media as="li" className="border-bottom mb-2">
                    <img
                      width={64}
                      height={64}
                      className="mr-3 roundedCircle"
                      src={logo}
                      alt=""
                    />
                    <Media.Body>
                      <Row>
                        <Col>
                          <h6>NAME OF REPO</h6>
                        </Col>
                        <Col>
                          <h6>USER</h6>
                        </Col>
                        <Col>
                          <h6>SCORE</h6>
                        </Col>
                        <Col className="text-right">
                          <i
                            className="fas fa-star fa-2x"
                            style={{ color: "#d9c158" }}
                          />
                        </Col>
                      </Row>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo. Cras purus
                        odio, vestibulum in vulputate at, tempus viverra turpis.
                        Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                    </Media.Body>
                  </Media>

                  <Media as="li" className="border-bottom mb-2">
                    <img
                      width={64}
                      height={64}
                      className="mr-3 roundedCircle"
                      src={logo}
                      alt=""
                    />
                    <Media.Body>
                      <Row>
                        <Col>
                          <h6>NAME OF REPO</h6>
                        </Col>
                        <Col>
                          <h6>USER</h6>
                        </Col>
                        <Col>
                          <h6>SCORE</h6>
                        </Col>
                        <Col className="text-right">
                          <i
                            className="fas fa-star fa-2x"
                            style={{ color: "#d9c158" }}
                          />
                        </Col>
                      </Row>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo. Cras purus
                        odio, vestibulum in vulputate at, tempus viverra turpis.
                        Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                    </Media.Body>
                  </Media>

                  <Media as="li" className="border-bottom mb-2">
                    <img
                      width={64}
                      height={64}
                      className="mr-3 roundedCircle"
                      src={logo}
                      alt=""
                    />
                    <Media.Body>
                      <Row>
                        <Col>
                          <h6>NAME OF REPO</h6>
                        </Col>
                        <Col>
                          <h6>USER</h6>
                        </Col>
                        <Col>
                          <h6>SCORE</h6>
                        </Col>
                        <Col className="text-right">
                          <i
                            className="fas fa-star fa-2x"
                            style={{ color: "#d9c158" }}
                          />
                        </Col>
                      </Row>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo. Cras purus
                        odio, vestibulum in vulputate at, tempus viverra turpis.
                        Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                    </Media.Body>
                  </Media>
                </ul>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Favorites;

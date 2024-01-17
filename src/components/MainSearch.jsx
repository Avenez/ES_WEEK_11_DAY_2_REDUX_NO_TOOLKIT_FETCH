import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import handleSubmit, { SET_QUERY } from "../redux/actions/actions";
import store from "../redux/store/store";

const MainSearch = () => {
  // const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);
  const data = useSelector((state) => state.initialstate);

  const handleInputChange = (e) => {
    dispatch(SET_QUERY(e.target.value));
    console.log("questo è query " + query.query);
  };

  const Submit = (e) => {
    e.preventDefault();

    dispatch(handleSubmit(query.query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={Submit}>
            <Form.Control
              type="search"
              value={query.query}
              onChange={handleInputChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {data.data.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

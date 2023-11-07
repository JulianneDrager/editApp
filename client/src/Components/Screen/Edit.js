import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form, Col, Button } from "react-bootstrap";

const Edit = () => {
//   const [inputData, setInputData] = useState([]);
//   const { editId, data } = useParams();
const { paramValue, editId } = useParams();
const [inputValue, setInputValue] = useState(paramValue);
const [data, setData] = useState('');

useEffect(() => {
    setInputValue(data);
  }, [data]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/getid/${editId}/${data}`).then((res) => {
      console.log('test', res.data);
    });
  }, [editId, data]);

  const updateContent = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:3001/update/${editId}`,
      data: {
        data: inputValue,
      },
    }).then((res) => {
      //   history.push(`/success/${companyId}/${employeeId}`);
      console.log('test', res);
      alert("content is changed");
      setData(res.data);
    });
  };

  return (
    <>
      <h1>Review Event Information</h1>
      <hr />
      <Form action="/update/:editId" method="post" onSubmit={updateContent}>
        <Col className={"col-sm-5"}>
          <Form.Label>Content:</Form.Label>
          <Form.Control
            value={inputValue}
            onChange={handleInputChange}
          />
        </Col>
        <Button type="submit">UPDATE</Button>
      </Form>
    </>
  );
};
export default Edit;

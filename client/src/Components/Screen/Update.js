// import React from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// import { Form, Button } from "react-bootstrap";

// const Update = () => {
//   const { data } = useParams();
//   console.log(data);

//   axios.put(`/getid/${editId}`).then((res) => {
//     console.log(res.data.data);
//     setEditData(res.data.data.editdata);
//   });

//   return (
//     <>
//       <p>edit</p>
//       <Form action="/put" method="put">
//         <Form.Group>
//           <Form.Control value={data} onChange={(e) => e.target.value} />
//         </Form.Group>
//         <Button>UPDATE</Button>
//       </Form>
//       <hr />
//     </>
//   );
// };
// export default Update;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SelectUpdate = () => {
  const [data, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/get`)
      .then((res) => {
        console.log("event:", res.data);
        setEvent(res.data);
        // setEmployee(res.data.employee)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setEvent]);

  return (
    <>
      <h1>Review Update</h1>
      <hr />

      {data.map((res, index, _id) => (
        <div key={res.event}>
          {res.data}
          <div>
            <Link
              to={`/edit/${res._id}/${res.data}`}
              onClick={() => {
                console.log("RESULTS", res._id);
                return res._id;
              }}
            >
              Edit content
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
export default SelectUpdate;

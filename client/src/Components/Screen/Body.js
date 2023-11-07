import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Body = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  let test;
  if (location.pathname === `/`) {
    test = true;
  } else {
    test = false;
  }
  let navigate = useNavigate();

  //axios was removed from useEffect to stop rerenders ie. i in inp input and "" renders
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:3001/post/`,
      data: {
        data: data,
      },
    }).then((res) => {
      console.log("resp", res.data);
      navigate(`/update/${data}`);
    });
  };

  const subLink = `edit/${data}`

  return (
    <>
      <p>Body</p>
      <Form action="/post" method="post" onSubmit={handleSubmit}>
        <Form.Group controlId="data">
          <Form.Control
            type="text"
            name="data"
            value={data}
            // onChange={(e) => setData(e.target.value)}
            placeholder="Edit me!"
          />
        </Form.Group>
       {test && <Button type="submit">SAVE</Button>}
        {!test && <Link to={subLink}>EDIT</Link>}
      </Form>
      <hr />
    </>
  );
};
export default Body;


// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";

// const Body = () => {
//   const [data, setdata] = useState([]);
//   const [editId] = useState("");

//   const handleContentChange = (event) => {
//     setdata(event.target.value);
//   };

//   // const handleUpdateContent = () => {
//   //   // Send the updated content to the server
//   //   axios.post("http://localhost:3001/post", { data })
//   //     .then((response) => {
//   //       console.log('Content updated successfully!', response.data);
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error updating content:', error);
//   //     });
//   // };
//   // const location = useLocation();
//   // let test;
//   // if (location.pathname === `/`) {
//   //   test = true;
//   // } else {
//   //   test = false;
//   // }
//   let navigate = useNavigate();

//   // //axios was removed from useEffect to stop rerenders ie. i in inp input and "" renders
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios({
//       method: "POST",
//       url: "http://localhost:3001/post",
//       data: {
//         data: data,
//       },
//     }).then((res) => {
//       console.log("resp", res.data);
//       navigate(`/${editId}/${data}`);
//     });
//   };

//   return (
//     <>
//       <h1>Home</h1>

          

//           <Link to={`/edit/${data.editId}`}>Edit</Link>


//     </>
//   );
// };

// export default Body;

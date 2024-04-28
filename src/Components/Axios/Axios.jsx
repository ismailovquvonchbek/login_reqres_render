import React from "react";
import axios from "axios";
// import { Button, Checkbox } from "@mui/material";
import  Wrapper from "../../app.style";

function AxiosApi() {
  const [users, setUsers] = React.useState([]);
  

  React.useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setUsers(res?.data.slice(0, 5));
      } catch (error) {
        console.log("Serverdan Error");
      }
    };

    FetchData();
  }, []);

  return (
    <>
      <h1 className="text-center text-danger m-5">Hello Axios</h1>
      {/* <div className="item">
        {users?.length > 0 &&
          users.map((item) => (
            <li key={item.id}>
              <img src={item.url} width={400} height={400} />
            </li>
          ))}
      </div> */}

      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Wrapper>Nimadir</Wrapper> */}

      {/* <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div> */}
    </>
  );
}

export default AxiosApi;

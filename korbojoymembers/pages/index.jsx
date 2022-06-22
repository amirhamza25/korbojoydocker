import { checkCookies, setCookies } from "cookies-next";
import { useEffect } from "react";

function Index(props) {
  const token1 = props.token;
  console.log(token1);

  useEffect(() => {
    const checkToken = checkCookies("token");
    console.log(checkToken);
    setCookies("token", token1);

    if (checkToken == true) {
      window.location.href = "http://localhost:3001/home";
    } else {
      window.location.href = "http://localhost:3000";
    }
  }, []);
  return <div>index</div>;
}

export default Index;

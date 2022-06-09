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
      window.location.href = "http://feriwalacourier.com/home";
    }
  }, []);
  return <div>index</div>;
}

export default Index;

export async function getServerSideProps({ req }) {
  const token = req.cookies.token;

  console.log(token);

  if (!token) {
    return {
      notFound: true,
    };
  }

  return {
    props: { token },
  };
}

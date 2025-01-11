// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";

const Page = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   const fetchSession = async () => {
  //     const token = router.query.token;

  //     if (token) {
  //       try {
  //         const response = await axios.get(
  //           `https://ws.audioscrobbler.com/2.0/?method=auth.getSession&api_key=YOUR_API_KEY&token=${token}&api_sig=YOUR_API_SIGNATURE&format=json`
  //         );
  //         const session = response.data.session;
  //         // Save the session key and use it for authenticated requests
  //         console.log("Session:", session);
  //       } catch (error) {
  //         console.error("Error fetching session:", error);
  //       }
  //     }
  //   };

  //   fetchSession();
  // }, [router.query.token]);

  return <div>Not implemented: Loading...</div>;
};

export default Page;

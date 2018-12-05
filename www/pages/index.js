import fetch from "isomorphic-unfetch";
import { creatId } from "./../../util";

const Index = props => (
  <>
    <h1>Shorty</h1>
  </>
);

Index.getInitialProps = async function() {
  // const res = await fetch("https://shorty-eejsofpnu.now.sh/get");
  // let shorties = await res.json();
  // return {
  //   shorties
  // };
  // <ul>
  //     {(props.shorties || []).map(shorty => {
  //       console.log(shorty);
  //       return <li key={shorty.shorty}>{shorty.url}</li>;
  //     })}
  // </ul>
};

export default Index;

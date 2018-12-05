import fetch from "isomorphic-unfetch";
const Index = props => (
  <>
    <div>Welcome to next.js!</div>
    <ul>
      {(props.shorties || []).map(shorty => {
        console.log(shorty);
        return <li key={shorty.shorty}>{shorty.url}</li>;
      })}
    </ul>
  </>
);

Index.getInitialProps = async function() {
  const res = await fetch("https://shorty-eejsofpnu.now.sh/get");
  let shorties = await res.json();
  return {
    shorties
  };
};

export default Index;

import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Robots = (props) => (
  <div>
    <h1>Robots</h1>
    <Link href="/">
      <button>home</button>
    </Link>
    <div>
      {props.robots.map((robot) => (
        <li key={robot.id}>
          <Link href={`robots/${robot.id}`}>
            <a>{robot.name}</a>
          </Link>
        </li>
      ))}
    </div>
  </div>
);

Robots.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  // when we do a hard refresh on the browser, we already have the data and there's no
  // reason to fetch it again on the client. So refreshing the page never fetch the data
  // on the client which is very very cool.
  // intial refresh: console.log on server
  // revisting the page: console.log on client
  return {
    robots: data,
  };
};

export default Robots;

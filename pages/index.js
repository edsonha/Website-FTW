import Link from "next/link";

const Index = () => (
  <div>
    <h1>SSR Magician</h1>
    {/* With Link you are doing code splitting */}
    <Link href="/about">
      <button>About</button>
    </Link>
    <Link href="/robots">
      <button>Robots</button>
    </Link>
    {/* With a tag, you are doing normal server side rendering */}
    <a href="/contact">Contact Me</a>
  </div>
);

export default Index;

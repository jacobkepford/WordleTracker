import Link from "next/link";

export const HomeButton = () => {
  return (
    <Link href="/">
      <button className="btn btn-dark">Back to home</button>
    </Link>
  );
};

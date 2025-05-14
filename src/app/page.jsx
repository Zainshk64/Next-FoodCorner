import Link from "next/link";

export default function Home() {
  return (
   <div className="p-5 text-center py-20" >
    <h1 className="text-3xl font-bold " >

    Welcome to food corner
    </h1>
    <Link href={'/recipe'}  >Explore Menu</Link>
    </div>
  );
}

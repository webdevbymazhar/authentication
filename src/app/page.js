import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
     <h1 className="text-5xl font-bold">This is Home Page</h1>
     <button className="mt-5 px-5 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black hover:delay-150"><Link href={"/dashboard"}>Go To Dashboard</Link></button>
    </div>
  );
}

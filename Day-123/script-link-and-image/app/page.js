import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-200 relative">
    <Image fill={true} objectFit="contain" className="mx-auto" src="https://lh5.googleusercontent.com/proxy/fq7e2iEODQIjTm9Hf3HY9kxt5hw0p-HP745nbAJbYYGoWvaFvdNnpNk4G4D24puYktKYrTOkFQXIwVr7QXuLVJxNA-uGsgnQdA" alt="" />
    </div>
  );
}

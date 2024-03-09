import NotFound from "@/app/not-found";

export default function Page({ params }) {
    //throw new Error("Error hai")
    //Fetch your blog post by it's slug
    let languages = ["javascript","java","go","cpp","Typescript"];
    if(languages.includes(params.slug)){
        return <div>My Post: {params.slug}</div>
    }
    else{
        return <NotFound/>
    }
}

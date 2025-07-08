import { useLoaderData } from "react-router-dom";
import { Card } from "../components/Card";
import '@/styles/Pages/home.scss'

export function Home() {
  const data = useLoaderData()
  console.log(data)

  return (
    <div className="card-container">
      {data.map((post) => (
        <Card key={post.id} src={post.cover} alt={post.title} text={post.title} navLink={`/logement/${post.id}`}/>
      ))}
    </div>
  )
}

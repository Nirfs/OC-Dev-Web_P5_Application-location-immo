import { useLoaderData } from "react-router-dom";
import { Card } from "@/components/Card";
import { SubHeader } from "@/components/SubHeader";

import subHeadercliff from '@/assets/sub_header_cliff.webp'
import '@/styles/Pages/home.scss'

export function Home() {
  const data = useLoaderData()

  console.log(data)
  
  return (
    <main>
      <SubHeader src={subHeadercliff} alt="paysage de falaise" text="Chez vous, partout et ailleurs"/>
      <section className="gallery" aria-label="Liste des logements">
        {data.map((post) => (
          <Card key={post.id} src={post.cover} alt={post.title} text={post.title} navLink={`/logement/${post.id}`}/>
        ))}
      </section>
    </main>
  )
}

import { useLoaderData, useParams} from "react-router-dom";
import { useScollTo } from "@/hook/ScrollTo/useScrollTo"
import { NotFound } from "./NotFound";
import { Carousel } from "@/components/Carousel";
import { Collapse } from "@/components/Collapse";
import { StarsRating } from "@/components/StarRating";
import { Profil } from "@/components/Profil";
import { Tags } from "@/components/Tags";
import "@/styles/Pages/accomodation.scss";

export function Accomodation() {
  const scrollToTop = useScollTo();
  const AnnoncesList = useLoaderData()
  const { id } = useParams()
  const logement = AnnoncesList.find((item) => item.id === id);

  
  if (!logement) {
    return <NotFound />;
  }

  return (
    <>
      <Carousel pictures={logement.pictures} title={logement.title}/>

      <section className="title-container">
        <div className="title">
          <h2>{logement.title}</h2>
          <p className="location">{logement.location}</p>
          <Tags logement = {logement}/>
        </div>

        <div className="profil-container">
          <div className="avatar">
            <Profil logement = {logement} src={logement.host.picture} alt={`Photo de ${logement.host.name}`}/>
          </div>
          <StarsRating rating={logement.rating} id={logement.id}/>
        </div>
      </section>

      <section className="accomodation-collapse-container">
        <Collapse title="Description" text={<p>{logement.description} </p>} headingLevel="h3" />
        <Collapse
          title="Équipements"
          text={
            <ul>
              {logement.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
          headingLevel="h3"
        />
      </section>
    </>
  );
}

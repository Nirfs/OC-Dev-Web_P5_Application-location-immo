import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";
import { NotFound } from "./NotFound";
import { Carousel } from "@/components/Carousel";
import { Collapse } from "@/components/Collapse";
import { StarsRating } from "@/components/StarRating";
import { NameSplit } from "@/components/NameSplit";
import { Tags } from "@/components/Tags";
import "@/styles/Pages/accomodation.scss";

export function Accomodation() {
  const AnnoncesList = useLoaderData()
  
  const { id } = useParams()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
      const found = AnnoncesList.find((item) => item.id === id);
      if (found) {
        setLogement(found);
      }
    }, [id, AnnoncesList]);

  if (AnnoncesList && id && !logement) {
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
            <NameSplit logement = {logement}/>
            <img
              src={logement.host.picture}
              alt={`Photo de ${logement.host.name}`}
            />
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

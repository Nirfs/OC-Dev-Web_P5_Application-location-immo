import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Carousel } from "@/components/Carousel";
import { Collapse } from "@/components/Collapse";
import { StarsRating } from "@/components/StarRating";

import "@/styles/Pages/accomodation.scss";

export function Accomodation() {
  const data = useLoaderData();
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const found = data.find((item) => item.id === id);
    setLogement(found);
  }, [id, data]);

  if (!logement) return <NotFound />;

  return (
    <main>
      <Carousel data={logement} />

      <div className="title-container">
        <div className="title">
          <h2>{logement.title}</h2>
          <p className="location">{logement.location}</p>
          <div className="tag-container">
            {logement.tags.map((tag, index) => (
              <p className="tag" key={`${index}-${tag}`}>
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div className="profil-container">
          <div className="avatar">
            <p>
              {logement.host.name.split(" ")[0]}<br />
              {logement.host.name.split(" ")[1]}
            </p>
            <img
              src={logement.host.picture}
              alt={`Photo de ${logement.host.name}`}
            />
          </div>
          <StarsRating rating={logement.rating} id={logement.id}/>
        </div>
      </div>

      <div className="accomodation-collapse-container">
        <Collapse title="Description" text={<p>{logement.description} </p>} headingLevel="h3" />
        <Collapse
          title="Équipements"
          text={logement.equipments.map((equipement, index) => (
            <p key={index}>{equipement}</p>
          ))}
        />
      </div>
    </main>
  );
}

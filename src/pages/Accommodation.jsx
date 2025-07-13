import { useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Carousel } from "@/components/Carousel";
import { Collapse } from "@/components/Collapse";
import { StarsRating } from "@/components/StarRating";

import "@/styles/Pages/accomodation.scss";

export function Accomodation() {
  const data = useLoaderData()
  const navigate = useNavigate()
  
  const { id } = useParams()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    if (data && id) {
      const found = data.find((item) => item.id === id);
      if (!found) {
        navigate("/404");
      } else {
        setLogement(found);
      }
    }
  }, [id, data, navigate]);

  if (!logement) return null;

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
          ))
         }
          headingLevel="h3"
        />
      </div>
    </main>
  );
}

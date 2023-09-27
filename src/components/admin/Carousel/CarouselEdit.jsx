import React, { useState, useEffect } from "react";
import { getCarousels } from "../../../services/api/carouselInfo";

const CarouselEdit = () => {
  const [carousels, setCarousels] = useState([]);

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const carouselsData = await getCarousels();
        setCarousels(carouselsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des carrousels :", error);
      }
    };

    fetchCarousels();
  }, []);

  return (
    <div>
      <h1>Édition du Carrousel</h1>
      <ul>
        {carousels.map((carousel) => (
          <li key={carousel.id}>
            <h2>{carousel.title}</h2>
            <p>{carousel.description}</p>
            {carousel.images.map((image) => (
              <div key={image.id}>
                <img src={image.url} alt={image.title} />
                <button onClick={() => handleEditImage(image.id)}>Éditer</button>
                <button onClick={() => handleDeleteImage(image.id)}>Supprimer</button>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarouselEdit;

import React, { useState } from "react";
import { createCarousel } from "../../../services/api/carouselInfo";
import Button from "../../input/Button";

const CarouselCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carouselData = {
      title: title,
      description: description,
      image: image,
    };

    try {
      const createdCarousel = await createCarousel(carouselData);

      console.log("Carrousel créé avec succès :", createdCarousel);
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("Erreur lors de la création du carrousel :", error);
    }
  };

  return (
    <div>
      <h1>Création de Carrousel</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre du Carrousel :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="image">Image :</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <Button content="Créer le Carrousel" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  );
};

export default CarouselCreate;

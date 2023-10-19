import React, { useState, useEffect } from 'react';
import {
  getImages,
  createCarousel,
  updateCarousel,
  deleteCarousel,
} from '../../../services/api/carouselInfo';

const CarouselEditPage = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [editedItem, setEditedItem] = useState(null);

  useEffect(() => {
    fetchCarouselData();
  }, []);

  const fetchCarouselData = async () => {
    try {
        const data = await getImages();
        const dataArray = Array.isArray(data) ? data : Object.values(data);
        setCarouselData(dataArray);
    } catch (error) {
        console.error('Error fetching carousel data:', error);
    }
};


  const handleEdit = (item) => {
    setEditedItem(item);
  };

  const handleSaveEdit = async () => {
    try {

      await updateCarousel(editedItem.id, {
        name: editedItem.name,
        description: editedItem.description,
      });

      fetchCarouselData();
      setEditedItem(null);
    } catch (error) {
      console.error('Error saving edit:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditedItem(null);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCarousel(id);

      fetchCarouselData();
    } catch (error) {
      console.error('Error deleting carousel:', error);
    }
  };

  return (
    <div>
      <h1>Carousel Edit Page</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {carouselData.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={`URL_de_l'image/${item.id}`} alt={`Image ${item.id}`} />
              </td>
              <td>
                {editedItem === item ? (
                  <input
                    type="text"
                    value={editedItem.name}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, name: e.target.value })
                    }
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editedItem === item ? (
                  <textarea
                    value={editedItem.description}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, description: e.target.value })
                    }
                  />
                ) : (
                  item.description
                )}
              </td>
              <td>
                {editedItem === item ? (
                  <>
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarouselEditPage;
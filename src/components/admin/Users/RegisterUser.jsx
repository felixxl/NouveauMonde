import React, { useState } from 'react';
import { checkAuthentication } from '../../../services/api/ConnexionUser';

const RegisterUser = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit comporter au moins 6 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await checkAuthentication(formData);
        console.log('Réponse de l\'API :', response);
  
        if (response && response['hydra:member'] && response['hydra:member'].length > 0) {
          props.onLogin(); 
          console.log('Connexion réussie');
        } else {
          console.log('Connexion échouée');
        }
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la connexion :', error.message);
      }
    } else {
      console.log('Le formulaire contient des erreurs, veuillez les corriger');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <label>Mot de passe:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        {errors.password && <div>{errors.password}</div>}
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default RegisterUser;

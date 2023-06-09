import React, { useState } from 'react';
import Modal from '../componentes/Modal';

const MyForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar las acciones correspondientes al enviar el formulario
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Abrir formulario</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
          {/* Campos del formulario */}
          <input type="text" name="nombre" />
          <input type="email" name="email" />
          {/* ... */}
          <button type="submit">Enviar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </form>
      </Modal>
    </div>
  );
};

export default MyForm;

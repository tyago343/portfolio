import React from 'react';

const PostCreation: React.FC = () => {
  return (
    <form>
      <label htmlFor="title">
        Título
        <input type="text" name="title" />
      </label>
      <label htmlFor="subtitle">
        Subtítulo
        <input type="text" name="subtitle" />
      </label>
      <label htmlFor="content">
        Contenido
        <textarea name="content"></textarea>
      </label>
      <label htmlFor="image">
        Imagen para cabecera
        <input type="file" name="image" />
      </label>
    </form>
  );
};

export default PostCreation
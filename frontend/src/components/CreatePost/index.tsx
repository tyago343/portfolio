import React from "react";
import PostApi from "../../utils/PostRequestsApi";

const postApi: PostApi = new PostApi();

const CreatePost = () => {
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    const { title, subtitle, content, image, enable } = evt.target.elements;
    const data = new FormData();
    data.append("title", title.value)
    data.append("subtitle", subtitle.value)
    data.append("content", content.value)
    data.append("image", image.files[0])
    data.append("enable", enable.value)
    postApi.createPost(data)
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Título:
        <input type="text" name="title" id="title" maxLength={100} />
      </label>
      <label htmlFor="subtitle">
        Subtítulo:
        <input type="text" name="subtitle" id="subtitle" maxLength={300} />
      </label>
      <label htmlFor="content">
        Contenido:
        <textarea name="content" id="content" cols={30} rows={10} />
      </label>
      <label htmlFor="image">
        Imagen de cabecera:
        <input type="file" name="image" id="image" />
      </label>
      <label htmlFor="enable">
        Habilitado?:
        <input type="checkbox" name="enable" id="enable" />
      </label>
      <button type="submit">Crear post</button>
    </form>
  );
};
export default CreatePost;

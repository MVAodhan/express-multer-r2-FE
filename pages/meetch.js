import { useState } from 'react';
import axios from 'axios';

const Meech = () => {
  const [file, setFile] = useState('');
  const [caption, setCaption] = useState('');

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', file);
    formData.append('caption', caption);
    // await axios.post('http://localhost:8888/meech', formData, {
    //   headers: { 'Content-Type': 'multipart/form-data' },
    // });
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={submit}
        style={{ width: 650 }}
        className="flex flex-col space-y-5 px-5 py-14"
      >
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          type="text"
          placeholder="Caption"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Meech;

"use client";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "@/app/config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const createProduct = async (values) => {
  const id = uuidv4();
  const price = parseFloat(values.price);
  const stock = parseInt(values.stock);

  const docRef = doc(db, "products", id.toString());

  return setDoc(docRef, {
    ...values,
    id,
    price,
    stock
  }).then(() =>
    Swal.fire({
      position: "center",
      icon: "success",
      iconColor: "#457b9d",
      title: "Product created!",
      showConfirmButton: false,
      timer: 1500,
    })
  );
};

const CreateForm = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    stock: 20,
    price: 0,
    category: "",
    url: null,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (e) => {
    const storageRef = ref(storage, uuidv4());
    const fileSnapshot = await uploadBytes(storageRef, e.target.files[0]);
    const fileURL = await getDownloadURL(fileSnapshot.ref);
    setValues({ ...values, url: fileURL });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (values.title.length > 20) {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "Name Limit Exceeded",
    //     text: "The name cannot exceed 25 characters.",
    //     timer: 3000,
    //     timerProgressBar: true,
    //     showConfirmButton: false,
    //   });
    // } else {
      console.log(values)
    await createProduct(values);
    // }
  };
  return (
    <div className="my-16 p-8 mx-3 sm:mx-20 lg:mx-40 xl:mx-52 2xl:mx-96 select-none bg-white rounded">
      <h2 className="text-cyan font-semibold text-2xl pb-4 px-20">Crear Producto Nuevo</h2>
      <form onSubmit={handleSubmit} className="px-20">
        <label className="text-black">Slug: </label>
        <input
          type="text"
          value={values.slug}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="slug"
          onChange={handleChange}
        />

        <label className="text-black">Nombre: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="title"
          onChange={handleChange}
        />

        <label className="text-black">Imagen: </label>
        <input
          type="file"
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="image"
          onChange={handleImageChange}
        />

        <label className="text-black">Categoría: </label>
        <select
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="category"
          required
          onChange={handleChange}
          value={values.category}
        >
          <option value="" disabled>
            Seleccione una categoría
          </option>
          <option value="Compacto">Compacto</option>
          <option value="Full-Size">Full-Size</option>
          <option value="Tenkeyless">Tenkeyless</option>
          <option value="Ultradelgado">Ultradelgado</option>
          <option value="Personalizable">Personalizable</option>
        </select>

        <label className="text-black">Precio: </label>
        <input
          type="number"
          value={values.price}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="price"
          onChange={handleChange}
        />

        <label className="text-black">Stock: </label>
        <input
          type="number"
          value={values.stock}
          required
          className="p-2 rounded w-full border border-cyan block mb-4"
          name="inStock"
          onChange={handleChange}
        />

        <label className="text-black">Descripción: </label>
        <input
          type="text"
          value={values.description}
          required
          className="resize-none h-24 p-2 rounded w-full border border-cyan block mb-4"
          name="description"
          onChange={handleChange}
        />
        <button
        type="submit"
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-400 px-8 py-3 text-base font-medium text-white hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
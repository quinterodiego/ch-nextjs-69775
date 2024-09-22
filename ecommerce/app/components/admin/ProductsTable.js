import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import DeleteProductBtn from "./DeleteProductBtn";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/config/firebase";


// const getAllProducts = async () => {
//   const productRef = collection(db, 'products');
//   const querySnapshot = await getDocs(productRef);
//   return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
// }

const ProductsTable = async () => {
  // const items = await getAllProducts();
  const items = await fetch(`http://${process.env.VERCEL_URL}/api/productos/`, {
    cache: 'no-store'
  }).then(r => r.json())

  return (
    <div className="overflow-x-auto">
      <div className="space-x-2 flex">
        <Link
          href="admin/create"
          className="bg-blue-400 py-2 px-2 lg:px-6 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center"
        >
          Producto Nuevo
        </Link>
        <Link
          href="admin/orders"
          className="bg-blue-400 py-2 px-2 lg:px-6 sm:px-10 rounded-md text-white shadow-md flex items-center justify-center"
        >
          Órdenes
        </Link>
      </div>
      <table className="w-full mt-5 text-xs text-left text-gray-600">
        <thead className="text-xs text-gray-700 uppercase ">
          <tr>
            <th scope="col" className="px-3 py-2">
              Nombre
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Precio
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Stock
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Tipo
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Imagen
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Id
            </th>
            <th scope="col" className="px-3 py-2">
              Descripción
            </th>
            <th scope="col" className="px-3 py-2 text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="p-2 truncate"> {item.title}</td>
              <td className="p-2 text-center">$ {item.price}</td>
              <td className="p-2 text-center">{item.stock}</td>
              <td className="p-2 text-center">{item.category}</td>
              <td className="p-2 text-center">
                {item.url ? (
                  <Image
                  alt={item.title}
                  src={item.url[0]}
                    width={80}
                    height={80}
                  />
                ) : (
                  <>
                    <p className="text-gray">No image </p>
                  </>
                )}
              </td>
              <td className="p-2 text-center">{item.slug}</td>
              <td className="p-2 truncate max-w-prose">{item.description}</td>
              <td className="flex space-x-3 justify-center">
                <Link href={`/admin/edit/${item.id}`}>
                  <FaRegEdit className="text-gray text-xl " />
                </Link>
                <DeleteProductBtn id={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
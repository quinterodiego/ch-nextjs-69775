'use client'
import { Button } from "./components/ui/Button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter()
  return (
    <>
      <main
        className="container m-auto"
      >
        <h1 className="text-4xl text-blue-400">Página no encontrada</h1>
        <hr />
        <p className="text-base mt-4">
          La ruta a la que intentas acceder no existe.
        </p>
        <Button onClick={() =>  router.back()} className="py-2 px-5 mt-3">
          Volver
        </Button>
      </main>
    </>
  )
}
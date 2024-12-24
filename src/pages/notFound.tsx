import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="h-[80%] flex flex-col justify-center items-center gap-2 ">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4923/4923785.png"
        alt="Imagem de página não encontrada"
        draggable={false}
        className="w-[40%] max-w-[200px]"
      />
      <h2 className="font-bold text-xl">Ops... Essa página não existe</h2>
      <Link
        to={"/"}
        className="text-muted-foreground font-semibold text-lg p-2 hover:underline"
      >
        Retornar para o início
      </Link>
    </main>
  );
}

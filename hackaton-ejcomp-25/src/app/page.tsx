import auth from "@/Utils/Auth";

export default function Home() {
  return (
    <div className="font-sans">
      <header className="bg-sky-500 p-4 text-center">
        <h1 className="text-lg font-bold text-white">Log-in</h1>
      </header>
      <main className="flex justify-center m-10">
        <div className="p-5 border-1 border-sky-500 rounded-md">
          <form action="/home" className="flex flex-col justify-center items-center" onSubmit={auth}>
            <div className="flex flex-col gap-1 m-2">
              <label htmlFor="email">E-Mail</label>
              <input type="text" id="email" className="p-1 rounded-sm border-1 border-gray-300" required={true}/>
            </div>
            <div className="flex flex-col gap-1 m-2">
              <label htmlFor="Senha">Senha</label>
              <input type="password" id="senha" className="p-1 rounded-sm border-1 border-gray-300" required={true}/>
            </div>
            <div className="flex flex-col gap-1 m-2">
              <button className="bg-sky-500 px-3 rounded-full text-white cursor-pointer">Enviar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

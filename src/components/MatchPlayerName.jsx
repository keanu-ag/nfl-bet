import * as Unicons from "@iconscout/react-unicons";
import { useEffect, useState, useContext } from "react";
import { MatchContext } from "../context/MatchContext";

function MatchPlayerName() {
  const [state, setState] = useState(true),
    [name, setName] = useState(""),
    { changePlaying, changeName } = useContext(MatchContext);

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <div className="flex gap-4">
      <div className="grid grid-cols-2 gap-4 w-3/4">
        <input
          type="text"
          placeholder="Por favor ingrese su nombre completo"
          className="w-full rounded-md outline outline-offset-2 outline-1 my-3"
          onChange={(e) => {
            setName(e.target.value);
            setState(false);
          }}
        />
        <button
          disabled={state}
          className="inline-flex max-w-max px-5 py-2 rounded-md bg-zinc-500 hover:bg-zinc-700 m-3 text-white disabled:bg-zinc-800"
          onClick={() => {
            if (name.length !== 0) {
              changePlaying(false);
              changeName(name);
            } else {
              alert("Debes ingresar un nombre para poder jugar");
            }
          }}
        >
          <Unicons.UilFootballAmerican />
          Jugar
        </button>
      </div>
    </div>
  );
}

export default MatchPlayerName;

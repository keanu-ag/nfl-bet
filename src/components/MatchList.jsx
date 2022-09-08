import { useContext, useEffect, useState } from "react";
import { MatchContext } from "../context/MatchContext";
import MatchCard from "./MatchCard";
import * as Unicons from "@iconscout/react-unicons";
import axios from "axios";

function MatchList() {
  const { matches, playing, bets, name } = useContext(MatchContext);

  const [state, setState] = useState(true);

  const handleSubmit = async () => {
    try {
      const response = await axios({
        url: "http://127.0.0.1:8000/create/bet",
        method: "POST",
        data: { bets, name },
      });

      console.log(reponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setState(playing);
  });

  if (matches.length === 0) {
    return <h1>No hay partidos publicados</h1>;
  }

  return (
    <div>
      <h1 className="pb-1 font-bold ">Semana 1 de 18</h1>
      <div className="flex gap-4">
        <div className="grid grid-cols-4 gap-4 w-3/4">
          {matches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))}
        </div>
        <div className="row-auto justify-center items-center w-1/4 max-h-20">
          <button
            disabled={state}
            className="inline-flex bg-zinc-500 text-white hover:bg-zinc-700 rounded-md m-4 p-3 disabled:bg-zinc-800"
            onClick={handleSubmit}
          >
            <Unicons.UilMessage />
            Enviar Quiniela
          </button>

          <div className="overflow-x-auto relative shadow-md sm:rounded-lg hidden">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <td className="py-3 px-6"> Semana 1 </td>
                </tr>
              </thead>
              <tbody>
                <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <div className="flex flex-wrap columns-4 justify-between">
                    <td className="py-4 px-6">Team 1</td>
                    <td className="py-4 px-6">Team 2</td>
                    <td className="py-4 px-6">Team 3</td>
                    <td className="py-4 px-6">Team 4</td>
                    <td className="py-4 px-6">Team 5</td>
                    <td className="py-4 px-6">Team 6</td>
                    <td className="py-4 px-6">Team 7</td>
                    <td className="py-4 px-6">Team 8</td>
                    <td className="py-4 px-6">Team 9</td>
                    <td className="py-4 px-6">Team 10</td>
                    <td className="py-4 px-6">Team 11</td>
                    <td className="py-4 px-6">Team 12</td>
                    <td className="py-4 px-6">Team 13</td>
                    <td className="py-4 px-6">Team 14</td>
                    <td className="py-4 px-6">Team 15</td>
                    <td className="py-4 px-6">Team 16</td>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchList;

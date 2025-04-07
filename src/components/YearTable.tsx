import React from 'react';
import { api } from '~/utils/api';

type YearData = {
  id: number;
  yearName: number;
  fileLink: string;
  resultsLink: string;
};

const YearTable = ({ data }: { data: YearData[] }) => {
  const sortedData = data.sort((a: YearData, b: YearData) => {
    return a.yearName < b.yearName ? 1 : -1;
  });

  const { data: state } = api.newYearButton.getAll.useQuery();
  if (!state) {
    return <div>Loading</div>;
  }

  return (
    <div className="flex size-full flex-row justify-center h-min">
      <div className="flex w-2/4 flex-col items-center gap-4 rounded-lg bg-[#5480a9] p-6 h-min">
        <div className="w-full overflow-hidden rounded-lg bg-white text-black">
          <h1 className="p-10 text-center text-3xl font-bold">AKTUÁLNÍ ROK</h1>
          {state.isDisplayed ? (
            <div className='flex items-center justify-center pb-10'>
              <button className="rounded-lg bg-green-500 px-6 py-3 text-white font-semibold hover:bg-green-600 transition duration-300">
                Otevřít nový rok
              </button>
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Zadání zatím není vypuštěno.
            </p>
          )}
        </div>
        <table className="w-full table-fixed overflow-hidden rounded-lg bg-white text-black">
          <thead>
            <tr>
              <th colSpan={3}>
                <h1 className="p-10 text-3xl font-bold">PŘEDEŠLÉ ROKY</h1>
              </th>
            </tr>
          </thead>
          <thead>
            <tr className="bg-gray-300">
              <th className="p-4">Rok / Zadání na prohlédnutí</th>
              <th className="p-4">Zadání ke stažení</th>
              <th className="p-4">Výsledky</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index} className="border-b text-center">
                <td className="p-4">
                  <a
                    href={'zadání/' + item.yearName + '/' + item.fileLink}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                  >
                    {item.yearName}
                  </a>
                </td>
                <td className="p-4">
                  <a
                    href={'/zadání/' + item.yearName + '/' + item.fileLink}
                    className="text-blue-500 hover:underline"
                    download={item.fileLink}
                  >
                    Stáhnout
                  </a>
                </td>
                <td className="p-4">
                  <a
                    href={item.resultsLink}
                    className="text-blue-500 hover:underline"
                  >
                    Otevřít
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default YearTable;

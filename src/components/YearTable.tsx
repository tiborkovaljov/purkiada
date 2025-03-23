import React from "react";

type YearData = { year: number; fileLink: string; otherLink: string };

const YearTable = ({ data }: { data: YearData[] }) => {
  const sortedData = data.sort((a: YearData, b: YearData) => { return a.year < b.year ? 1 : -1; });

  return (
    <div className="flex size-full flex-row justify-center h-min">
      <div className="flex w-2/4 flex-col items-center gap-4 rounded-lg bg-[#5480a9] p-6 h-min">
        <div className="w-full overflow-hidden rounded-lg bg-white text-black">
          <h1 className="p-10 text-center text-3xl font-bold">AKTUÁLNÍ ROK</h1>
          <p></p>
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
              <th className="p-4">Rok</th>
              <th className="p-4">Soubor</th>
              <th className="p-4">Výsledky</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index} className="border-b text-center">
                <td className="p-4">{item.year}</td>
                <td className="p-4">
                  <a
                    href={item.fileLink}
                    className="text-blue-500 hover:underline"
                  >
                    Stáhnout
                  </a>
                </td>
                <td className="p-4">
                  <a
                    href={item.otherLink}
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

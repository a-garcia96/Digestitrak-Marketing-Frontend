import React from "react";

const DataTable = ({ mealData }) => {
  return (
    <>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead>
            <tr className="text-left">
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Start Time
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                End Time
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Meal
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Comments
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {mealData.map((entry, index) => {
              let isOdd = index % 2 !== 0;

              let startTime = new Date(entry.data.startTime.seconds * 1000);
              let endTime = new Date(entry.data.endTime.seconds * 1000);

              let startMM = startTime.getMonth();
              let startDD = startTime.getDate();
              let startYY = startTime.getFullYear();

              let endMM = endTime.getMonth();
              let endDD = endTime.getDate();
              let endYY = endTime.getFullYear();
              if (isOdd) {
                return (
                  <tr key={index} className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {`${startMM}/${startDD}/${startYY}`}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {`${endMM}/${endDD}/${endYY}`}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {entry.data.meal == true ? "yes" : "no"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {entry.data.comments}
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {`${startMM}/${startDD}/${startYY}`}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {`${endMM}/${endDD}/${endYY}`}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {entry.data.meal == true ? "yes" : "no"}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {entry.data.comments}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;

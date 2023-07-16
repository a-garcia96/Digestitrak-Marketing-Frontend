import React from "react";

const DataTable = ({ mealData }) => {
  return (
    <>
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
                Full Meal
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Comments
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {mealData.map((entry, index) => {
              let isOdd = index % 2 !== 0
              let startDate = new Date(entry.data.startTime.seconds * 1000).toDateString()
              let endDate = new Date(entry.data.endTime.seconds * 1000).toDateString()
              let startTime = new Date(entry.data.startTime.seconds * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
              let endTime = new Date(entry.data.endTime.seconds * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

              if (isOdd) {
                return (
                  <tr key={entry.id} className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {startDate + ' ' + startTime}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {endDate + ' ' + endTime}
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
                  <tr key={entry.id} className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {startDate + ' ' + startTime}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {endDate + ' ' + endTime}
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

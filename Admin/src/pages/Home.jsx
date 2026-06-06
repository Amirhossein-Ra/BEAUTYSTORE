import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
export default function Home() {
  return (
    <div className="flex justify-between h-screen  p-3 bg-gray-200 w-[77vw]">
      {/* LEFT */}
      <div className="flex flex-col w-2/3 ">
        <div className="flex w-[50vw]">
          <div className="bg-white h-52 w-60 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 m-5 border-[10px] border-blue-400 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">699</h2>
            </div>
            <h2 className="font-semibold text-2xl">Products</h2>
          </div>
          <div className="bg-white h-52 w-60 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 m-5 border-[10px] border-red-400 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">100</h2>
            </div>
            <h2 className="font-semibold text-2xl">Products</h2>
          </div>
          <div className="bg-white h-52 w-60 m-5 shadow-xl rounded-lg flex flex-col items-center justify-center">
            <div className="h-32 w-32 m-5 border-[10px] border-gray-400 border-solid rounded-full flex items-center justify-center">
              <h2 className="font-bold text-2xl">200</h2>
            </div>
            <h2 className="font-semibold text-2xl">Users</h2>
          </div>
        </div>
        {/* TABLE */}

        <div className="bg-white m-5 p-5 rounded-lg">
          <div className="p-6 bg-white rounded-md">
            <h3 className="text-lg font-semibold mb-4">Latest Transactions</h3>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4">Customer</th>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Stats</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">John Doe</td>
                  <td className="py-2 px-4">$ 200</td>
                  <td className="py-2 px-4 text-green-500">Approved</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">John Doe</td>
                  <td className="py-2 px-4">$ 200</td>
                  <td className="py-2 px-4 text-red-500">Declined</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">John Doe</td>
                  <td className="py-2 px-4">$ 200</td>
                  <td className="py-2 px-4 text-green-500">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col w-1/3 bg-white p-5 shadow-xl rounded-lg">
        <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
          <h2 className="font-bold text-2xl">Total Revenue: $200,000</h2>
        </div>

        <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
          <h2 className="font-bold text-2xl">Total Losses: $0</h2>
        </div>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          height={350}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
      </div>
    </div>
  );
}

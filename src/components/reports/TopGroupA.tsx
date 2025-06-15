'use client';

import React from 'react';

interface Student {
  sbd: string;
  toan: number;
  vatLi: number;
  hoaHoc: number;
  totalScore: number;
}

export default function TopGroupA({ students }: { students: Student[] }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Top 10 Students - Group A (Math, Physics, Chemistry)
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">SBD</th>
              <th className="px-4 py-2 border">Math</th>
              <th className="px-4 py-2 border">Physics</th>
              <th className="px-4 py-2 border">Chemistry</th>
              <th className="px-4 py-2 border">Total Score</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, index) => (
              <tr key={s.sbd} className="text-center hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border font-medium">{s.sbd}</td>
                <td className="px-4 py-2 border">{s.toan}</td>
                <td className="px-4 py-2 border">{s.vatLi}</td>
                <td className="px-4 py-2 border">{s.hoaHoc}</td>
                <td className="px-4 py-2 border font-semibold text-blue-600">{s.totalScore.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

'use client';
import React, { useState } from 'react';
import axios from 'axios';

export default function SearchScores() {
  const [sbd, setSbd] = useState('');
  const [student, setStudent] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!sbd.trim()) {
      setError('Please enter a Candidate Number.');
      setStudent(null);
      return;
    }

    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

      const res = await axios.get(`${API_BASE_URL}/students/${sbd}`);
      setStudent(res.data);
      setError('');
    } catch (err) {
      setStudent(null);
      setError('Cannot find student with this SBD. Please check again.');
    }
  };

  const subjectNames: Record<string, string> = {
    toan: 'Math',
    nguVan: 'Literature',
    ngoaiNgu: 'Foreign Language',
    vatLi: 'Physics',
    hoaHoc: 'Chemistry',
    sinhHoc: 'Biology',
    lichSu: 'History',
    diaLi: 'Geography',
    gdcd: 'Civic Education',
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-xl mx-auto  rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Check Exam Scores</h1>

        {/* Input SBD + Button */}
        <div className="flex gap-2 mb-4">
            <input
            type="text"
            value={sbd}
            onChange={(e) => setSbd(e.target.value)}
            placeholder="Enter Candidate Number..."
            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]"
            />
            <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            >
            Search
            </button>
        </div>

        {error && <p className="text-red-600 mt-2 text-center">{error}</p>}

        {student && (
          <div className="mt-10 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Result for Candidate: <span className="text-blue-600">{student.sbd}</span>
            </h2>

            <div className="w-full max-w-md rounded-xl border p-6 shadow-sm bg-background">
              <ul className="space-y-3 text-sm text-foreground">
                {Object.entries(subjectNames).map(([key, label]) =>
                  student[key] != null ? (
                    <li key={key} className="flex justify-between border-b border-border pb-1">
                      <span className="dark:text-white">{label}</span>
                      <span className="font-medium dark:text-white">{student[key]}</span>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

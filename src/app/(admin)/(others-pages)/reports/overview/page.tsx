'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type ScoreDistribution = {
  EXCELLENT: number;
  GOOD: number;
  AVERAGE: number;
  WEAK: number;
};

interface SubjectReport {
  subject: string;
  distribution: ScoreDistribution;
}

const subjectLabels: Record<string, string> = {
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

export default function OverviewPage() {
  const [data, setData] = useState<SubjectReport[]>([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const res = await axios.get<SubjectReport[]>(`${API_BASE_URL}/reports/summary-by-subjects`);
        setData(res.data);
      } catch (err) {
        console.error('Failed to fetch overview data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, []);

  if (loading) return <p className="text-center mt-10 text-blue-600">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Overview of All Subjects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((item) => {
          const chartData = Object.entries(item.distribution).map(([level, value]) => ({
            level,
            count: value,
          }));

          return (
            <div key={item.subject} className="bg-white p-4 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold mb-2 text-center">
                {subjectLabels[item.subject] || item.subject}
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData}>
                  <XAxis dataKey="level" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
}

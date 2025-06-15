'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubjectSelector from '@/components/reports/Selector';
import SubjectBarChart from '@/components/reports/SubjectBarChart';

interface DistributionData {
  EXCELLENT: number;
  GOOD: number;
  AVERAGE: number;
  WEAK: number;
}

export default function PerSubjectPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [distribution, setDistribution] = useState<DistributionData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
    if (!selectedSubject) return;

    // Clear chart before loading new one
    setDistribution(null);
    setError(null);
    setLoading(true);

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const fetchData = async () => {
        try {
        const res = await axios.get(`${API_BASE_URL}/reports/subject/${selectedSubject}`);
        setDistribution(res.data.distribution);
        } catch (err) {
        setError('Failed to load subject data');
        } finally {
        setLoading(false);
        }
    };

    fetchData();
    }, [selectedSubject]);

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Per-Subject Score Overview</h1>

      <SubjectSelector onSelect={setSelectedSubject} />

      {loading && <p className="text-center mt-4 text-blue-500">Loading data...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {distribution && selectedSubject && (
        <div className="mt-8">
          <SubjectBarChart subject={selectedSubject} distribution={distribution} />
        </div>
      )}
    </div>
  );
}

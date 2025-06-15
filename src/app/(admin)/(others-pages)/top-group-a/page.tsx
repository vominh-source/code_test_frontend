'use client';

import { useState, useEffect } from 'react';
import TopGroupA from '@/components/reports/TopGroupA';

export default function Page() {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const res = await fetch(`${API_BASE_URL}/reports/top-group-a`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setStudents(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="p-4 text-blue-600">Loading data...</div>;
  if (!students) return <div className="p-4 text-red-500">Không thể tải dữ liệu.</div>;

  return <TopGroupA students={students} />;
}

'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

interface ScoreDistribution {
  EXCELLENT: number;
  GOOD: number;
  AVERAGE: number;
  WEAK: number;
}

interface Props {
  subject: string;
  distribution: ScoreDistribution;
}

const levelLabels: Record<keyof ScoreDistribution, string> = {
  EXCELLENT: 'Excellent',
  GOOD: 'Good',
  AVERAGE: 'Average',
  WEAK: 'Weak',
};

export default function SubjectBarChart({ subject, distribution }: Props) {
  const chartData = Object.entries(distribution).map(([level, count]) => ({
    level: levelLabels[level as keyof ScoreDistribution],
    count,
  }));

  return (
    <div className="w-full h-[400px]">
      <h2 className="text-xl font-semibold text-center mb-4">
        Score Distribution for Subject: <span className="capitalize text-blue-600">{subject}</span>
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="level" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

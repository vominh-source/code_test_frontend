'use client';
import React, { useState } from 'react';

const subjects = [
  { key: 'toan', label: 'Math' },
  { key: 'nguVan', label: 'Literature' },
  { key: 'ngoaiNgu', label: 'Foreign Language' },
  { key: 'vatLi', label: 'Physics' },
  { key: 'hoaHoc', label: 'Chemistry' },
  { key: 'sinhHoc', label: 'Biology' },
  { key: 'lichSu', label: 'History' },
  { key: 'diaLi', label: 'Geography' },
  { key: 'gdcd', label: 'Civic Education' },
];

export default function SubjectSelector({
  onSelect,
}: {
  onSelect: (subjectKey: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    setSelected(key);
    onSelect(key);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {subjects.map((subject) => (
        <button
          key={subject.key}
          onClick={() => handleSelect(subject.key)}
          className={`px-4 py-2 rounded-xl font-medium border transition
            ${selected === subject.key
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-blue-100'}
          `}
        >
          {subject.label}
        </button>
      ))}
    </div>
  );
}

import React from 'react'

export default function PageHeader({icon,title}) {
  return (
      <h1 className="text-2xl mb-3 font-semibold text-primary flex items-center gap-3">
          {icon}
          {title}
      </h1>
  );
}

import React from 'react'

export default function PageHeader({icon,title}) {
  return (
      <h1 className="text-3xl mb-3 font-bold text-primary flex items-center gap-3">
          {icon}
          {title}
      </h1>
  );
}

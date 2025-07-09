
import React from 'react';

interface LibraryContainerProps {
  children: React.ReactNode;
}

export const LibraryContainer = React.forwardRef<HTMLDivElement, LibraryContainerProps>(({ children }, ref) => {
  return (
    <div ref={ref} className="bg-[#D3C6B0] p-6 rounded-lg shadow-xl border-2 border-stone-800 max-h-full overflow-y-auto">
      {children}
    </div>
  );
});

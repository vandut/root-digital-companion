import React from 'react';

interface LibraryContainerProps {
  children: React.ReactNode;
}

export const LibraryContainer = React.forwardRef<HTMLDivElement, LibraryContainerProps>(({ children }, ref) => {
  return (
    <div ref={ref} className="bg-[#D3C6B0] p-4 sm:p-6 sm:rounded-lg sm:shadow-xl sm:border-2 sm:border-stone-800 max-h-full overflow-y-auto h-full sm:h-auto flex flex-col">
      {children}
    </div>
  );
});
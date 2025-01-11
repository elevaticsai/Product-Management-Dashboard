import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;

export function DialogContent({
  children,
  className = '',
  ...props
}: DialogPrimitive.DialogContentProps) {
  const [size, setSize] = React.useState({ width: 800, height: 600 });
  const [isDragging, setIsDragging] = React.useState(false);
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const startX = e.pageX;
    const startY = e.pageY;
    const startWidth = size.width;
    const startHeight = size.height;

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newWidth = Math.max(600, startWidth + (e.pageX - startX));
        const newHeight = Math.max(400, startHeight + (e.pageY - startY));
        setSize({ width: newWidth, height: newHeight });
      }
    };

    const onMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <DialogPrimitive.Content
        ref={dialogRef}
        style={{
          width: size.width,
          height: size.height,
          maxWidth: '95vw',
          maxHeight: '90vh'
        }}
        className={`fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] 
          bg-white rounded-lg shadow-lg overflow-hidden flex flex-col
          ${className} ${isDragging ? 'select-none' : ''}`}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
          <X className="h-4 w-4" />
        </DialogPrimitive.Close>
        
        {/* Resize handle */}
        <div
          className="absolute bottom-0 right-0 w-6 h-6 cursor-se-resize"
          onMouseDown={startResize}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="opacity-50"
          >
            <path d="M15 3v6h6M9 3v12h12" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogHeader({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 border-b border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function DialogTitle({
  children,
  className = '',
  ...props
}: DialogPrimitive.DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      className={`text-xl font-semibold text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </DialogPrimitive.Title>
  );
}
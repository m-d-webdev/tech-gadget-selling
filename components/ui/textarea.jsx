import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  label = "",
  id = Math.random() * 123,
  labelClassName = "",
  parentClassName = "",
  ...props
}) {
  return (
    <div className={parentClassName}>
      {/* <label htmlFor={id}>{label}</label> */}
      <label htmlFor={id} className={`  ${labelClassName} opacity-80  capitalize  duration-150  font-medium tracking-tight      `}>{label}</label>
      <textarea
        id={id}
        data-slot="textarea"
        className={cn(
          "border-background/20 resize-none min-h-[150] mt-1 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive  flex field-sizing-content w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props} />
    </div>
  );
}

export { Textarea }

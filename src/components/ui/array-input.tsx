"use client";

import type React from "react";
import { useState, useCallback, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";

interface ArrayInputProps {
  value?: string[];
  onChange?: (items: string[]) => void;
  placeholder?: string;
  maxItems?: number;
  addbutton?: boolean;
}

export function ArrayInput({
  value = [],
  onChange,
  placeholder = "Add item (press Enter or click Add)",
  maxItems = 20,
  addbutton = false,
}: ArrayInputProps) {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  // Initialize and filter out empty strings
  useEffect(() => {
    setItems(value?.filter((v) => v.trim() !== "") || []);
  }, [value]);

  const addItem = useCallback(() => {
    const trimmedValue = inputValue.trim();
    if (
      !trimmedValue ||
      items.includes(trimmedValue) ||
      items.length >= maxItems
    )
      return;

    const newItems = [...items, trimmedValue];
    setItems(newItems);
    setInputValue("");
    onChange?.(newItems);
  }, [inputValue, items, onChange, maxItems]);

  const removeItem = useCallback(
    (itemToRemove: string) => {
      const newItems = items.filter((item) => item !== itemToRemove);
      setItems(newItems);
      onChange?.(newItems);
    },
    [items, onChange]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem();
    }
  };

  return (
    <div className="w-full space-y-2">
      {addbutton ? (
        // SHOW LIST WITH ADD BUTTON
        <div>
          {items.length > 0 && (
            <ul className="mt-2 list-disc list-inside">
              {items.map((item) => (
                <li
                  key={item}
                  className="h-16 flex items-center justify-between gap-1 px-2 py-1 rounded mt-2 bg-neutral-200/30 text-black  "
                >
                  {item}
                  <button
                    onClick={() => removeItem(item)}
                    className="p-0.5 hover:bg-primary-foreground/20 rounded-full"
                    aria-label={`Remove ${item}`}
                  > 
                    <X className="w-3 h-3" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-2   gap-2">
            <Input
              type="text"
              placeholder={placeholder}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={items.length >= maxItems}
              className="flex-1"
            />
            <Button
              onClick={addItem}
              disabled={items.length >= maxItems || !inputValue.trim()}
              variant={"link"}
              className="flex items-center gap-1 mt-2"
            >
              <Plus className="w-4 h-4" /> Add
            </Button>
          </div>
        </div>
      ) : (
        // SHOW INLINE TAGS INSIDE INPUT
        <div className="flex flex-wrap items-center gap-1 p-2 rounded-lg border bg-white min-h-[64px] focus-within:ring-2 focus-within:ring-primary">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-200 text-black"
            >
              {item}
              <button
                onClick={() => removeItem(item)}
                className="p-0.5 hover:bg-primary-foreground/20 rounded-full"
                aria-label={`Remove ${item}`}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}

          <input
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={items.length >= maxItems}
            className="flex-1 min-w-[100px] border-none outline-none bg-transparent px-1 py-1 text-sm"
          />
        </div>
      )}

      {/* Counter */}
      <div className="text-xs text-muted-foreground flex justify-between">
        <span>
          {items.length} item{items.length !== 1 ? "s" : ""} added
        </span>
        {items.length >= maxItems && (
          <span className="text-destructive font-medium">
            Maximum items reached
          </span>
        )}
      </div>
    </div>
  );
}

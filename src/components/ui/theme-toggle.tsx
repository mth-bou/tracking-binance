"use client";

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";
import { useTheme } from 'next-themes';
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center space-x-2 px-2">
      <Sun size={18} />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <Moon size={18} />
    </div>
  );
};

export default ThemeToggle;

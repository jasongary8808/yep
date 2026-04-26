"use client";

import Image from "next/image";
import { useState } from "react";

interface AvatarProps {
  src?: string;
  alt: string;
  className?: string;
  rounded?: string;
}

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Avatar({
  src,
  alt,
  className = "",
  rounded = "rounded-[14px]",
}: AvatarProps) {
  const [errored, setErrored] = useState(false);
  const showImage = src && !errored;

  return (
    <div
      className={`relative overflow-hidden border-2 border-yep-blue bg-gradient-to-br from-yep-blue/15 to-yep-blue/35 ${rounded} ${className}`}
    >
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 285px"
          className="object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="font-viga select-none text-6xl font-black tracking-tight text-yep-blue/70 sm:text-7xl"
          >
            {initialsFromName(alt)}
          </span>
        </div>
      )}
    </div>
  );
}

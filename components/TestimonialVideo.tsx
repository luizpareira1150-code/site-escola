"use client";

import { useState } from "react";

type TestimonialVideoProps = {
  id: string;
  number: string;
};

export function TestimonialVideo({ id, number }: TestimonialVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const title = `Depoimento ${number}`;
  const shortsUrl = `https://www.youtube.com/shorts/${id}`;

  return (
    <article className="testimonial-card">
      <div className="testimonial-media">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            className="testimonial-preview"
            aria-label={`Assistir ${title.toLowerCase()}`}
            onClick={() => setIsPlaying(true)}
            style={{ backgroundImage: `linear-gradient(180deg, rgba(7, 31, 51, .03), rgba(7, 31, 51, .45)), url("https://i.ytimg.com/vi/${id}/hq2.jpg")` }}
          >
            <span className="testimonial-play" aria-hidden="true">▶</span>
          </button>
        )}
      </div>
      <div className="testimonial-caption">
        <h3>{title}</h3>
        <a href={shortsUrl} target="_blank" rel="noopener noreferrer">
          Ver no YouTube <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

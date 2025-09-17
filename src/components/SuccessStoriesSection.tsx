import React from "react";
import styles from "./SuccessStoriesSection.module.css";

const successStories = [
  {
    id: 1,
    videoType: "youtube",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    videoType: "youtube",
    url: "https://www.youtube.com/embed/FcUjdP2Ir-0",
  },
  {
    id: 3,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7521517452514331917",
  },
  {
    id: 4,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7525482001982295318",
  },
  {
    id: 5,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7532641811492261134",
  },
  {
    id: 6,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7533397043235032333",
  },
  {
    id: 7,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7543735414755069215",
  },
  {
    id: 8,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7547042807316679959",
  },
];

function MobileVideoCard({ url }: { url: string }) {
  return (
    <div className={styles.phoneFrame}>
      <div className={styles.videoWrapper}>
        <iframe
          src={url}
          title="Success Story Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function SuccessStoriesSection() {
  return (
    <section className={styles.successStoriesSection}>
      <h2>Creator Success Stories</h2>
      <div className={styles.storiesGrid}>
        {successStories.map((story) => (
          <MobileVideoCard key={story.id} url={story.url} />
        ))}
      </div>
    </section>
  );
}

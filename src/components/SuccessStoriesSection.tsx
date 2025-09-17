import React from "react";
import styles from "./SuccessStoriesSection.module.css";

// Example video data structure. Update as needed.
const successStories = [
  {
    id: 1,
    videoType: "youtube",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    videoType: "tiktok",
    url: "https://www.tiktok.com/embed/1234567890123456789",
  },
  // Add more stories as needed
];

function MobileVideoCard({ url, videoType }: { url: string; videoType: string }) {
  return (
    <div className={styles.videoCard}>
      {videoType === "youtube" ? (
        <iframe
          width="100%"
          height="315"
          src={url}
          title="Success Story Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <iframe
          width="100%"
          height="600"
          src={url}
          title="Success Story Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default function SuccessStoriesSection() {
  return (
    <section className={styles.successStoriesSection}>
      <h2>Success Stories</h2>
      <div className={styles.storiesGrid}>
        {successStories.map((story) => (
          <MobileVideoCard key={story.id} url={story.url} videoType={story.videoType} />
        ))}
      </div>
    </section>
  );
}

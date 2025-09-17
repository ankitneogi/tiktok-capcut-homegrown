import React from "react";
import styles from "./VideoSection.module.css";

export default function VideoSection() {
  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        {/* Left Column: Text */}
        <div className={styles.textContainer}>
          <h1>
            Hear From HOME's Leadership
          </h1>
        </div>

        {/* Right Column: Video */}
        <div className={styles.videoContainer}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

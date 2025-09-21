// "use client";
// import React from "react";
// import styles from "./Mapping.module.css";

// const Mapping: React.FC = () => {
//   return (
//     <section className={styles.mappingSection}>
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4690563332947!2d78.38872137498879!3d17.5328408833794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f22642a20f5%3A0x8a1a5784279cb56f!2sMG%20ELEVATORS!5e0!3m2!1sen!2sin!4v1757318996584!5m2!1sen!2sin"
//         className={styles.map}
//         allowFullScreen
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>
//     </section>
//   );
// };

// export default Mapping;

"use client";
import React from "react";
import styles from "./Mapping.module.css";

const Mapping: React.FC = () => {
  return (
    <section className={styles.mappingSection}>
      <iframe
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4690563332947!2d78.38872137498879!3d17.5328408833794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f22642a20f5%3A0x8a1a5784279cb56f!2sMG%20ELEVATORS!5e0!3m2!1sen!2sin!4v1757318996584!5m2!1sen!2sin"
        src="https://www.google.com/maps/d/embed?mid=18xgRBwgLQDQCh3GDGL2BvGXCA-NPDUU&ehbc=2E312F"
        className={styles.map}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="MG Elevators Map"
      ></iframe>
    </section>
  );
};

export default Mapping;

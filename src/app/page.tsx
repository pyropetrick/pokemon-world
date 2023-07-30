import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <section className={styles.section}>
          <h2 className={styles.title}>Learn, Strategize, and Duel!</h2>
          <div className={styles.description}>
            <p className={styles.card}>
              Welcome to the <span className="highlight">Pokémon World</span>, where education meets
              excitement in an extraordinary blend! Our platform specializes in the strategic aspect
              of Pokémon battles, allowing you to duel against highly advanced AI in dynamic,
              tactic-based battles.
            </p>
            <p className={styles.card}>
              At the <span className="highlight">Pokémon World</span>, we take you beyond the
              ordinary, immersing you in a world of strategies, power-ups, and mind-boggling
              challenges. Here, you can explore the depths of your favorite Pokémon&apos;s abilities
              and learn how to utilize them best in battles.
            </p>
            <p className={styles.card}>
              Our AI rivals aren&apos;t just any opponents; they&apos;re designed to adapt, learn
              and challenge you, pushing your analytical and strategic skills to the limit. With
              <span className="cursive"> every duel</span>, you gather more knowledge, improve your decision-making skills, and
              elevate your gaming tactics.
            </p>
            <p className={styles.card}>
              This platform is not just about winning battles; it&apos;s about learning, improving,
              and, most importantly, having fun while you&apos;re at it. We&apos;ve married the
              thrill of Pokémon duels with an enriching learning experience to create a
              one-of-a-kind educational gaming journey.
            </p>
            <p className={styles.card}>
              Dive into the <span className="highlight">Pokémon World</span> today and prepare for an
              unforgettable voyage of <span className="cursive">knowledge, strategy, and triumphant victories</span>. Rise to the
              challenge and hone your skills like a true Pokémon Master!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

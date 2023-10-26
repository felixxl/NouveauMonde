import React from 'react';
import Link from 'next/link';
import Banner from '../components/Banner';
import BackToTopButton from '../components/input/BackToTop';
import CustomContentModule from '../components/input/CustomContentModule';
import styles from '../assets/scss/pages/UnAutreMonde.module.scss';

const UnAutreMonde = () => {
  const activities = [
    { title: 'Yoga', description: 'Description détaillée du Yoga...', url: '/images/yoga.jpg', link: 'activities/yoga'  },
    { title: 'Tai-chi', description: 'Description détaillée du Tai-chi...', url: '/images/tai-chi.jpg', link: 'activities/taichi'},
    { title: 'Relaxation Dynamique', description: 'Description de la Relaxation Dynamique...', url: '/images/relaxation.jpg', link: 'activities/relaxationdynamique' },
    { title: 'Pilates', description: 'Description détaillée du Pilates...', url: '/images/yoga2.jpg' , link: 'activities/pilates'},
    { title: 'Aquagym Dynamique', description: 'Description de l\'Aquagym Dynamique...', url: '/images/aquagym.jpg', link: 'activities/aquagymdynamique' },
    { title: 'Aeroboxe', description: 'Description détaillée de l\'Aeroboxe...', url: '/images/Carousel1.jpg', link: 'activities/aeroboxe' },
    { title: 'Peinture', description: 'Description détaillée de la Peinture...', url: '/images/peinture.jpg', link: 'activities/peinture' }
  ];

  const events = [
    { title: 'Concert', description: 'Description détaillée du Concert...',url: '/images/concert.jpg', link: 'event/concert' },
    { title: 'Exposition de peinture', description: 'Description de l\'Exposition de peinture...',url: '/images/yoga.jpg', link: 'event/expositiondepeinture' },
    { title: 'Atelier', description: 'Description détaillée de l\'Atelier...',url: '/images/yoga.jpg', link: 'event/atelier' },
    { title: 'Stage', description: 'Description détaillée du Stage...',url: '/images/yoga.jpg', link: 'event/stage' }
  ];

  return (
    <div className={styles.background}>
      <Banner 
        title="Un&nbsp;autre&nbsp;monde"
        content="Association d'art et de culture"
      />
      <div className={styles.mainContent}>
        <BackToTopButton/>
        <div className={styles.borderLeft}></div>
        <div className={styles.borderRight}></div>
        <div>
          <h2 className={styles.decorativeTitle}>Nos activités</h2>
        </div>

        <div className={styles.activitySection}>
          <div className={styles.hexRow}>
            {activities.map((activity, index) => (
              <Link href={activity.link} key={index}>
                <div 
                  className={styles.hex}
                  style={{backgroundImage: `url(${activity.url})`}}
                >
                <div className={styles.hexTitle}>{activity.title}</div>
              </div>
            </Link>
          ))}
        </div>
        </div>
        <div className={styles.separ}>
          <h2 className={styles.decorativeTitle}>Événements de l'association</h2>
        </div>
        <div className={styles.eventSection}>
          <div className={styles.hexRow}>
            {events.map((event, index) => (
              <Link href={event.link} key={index}>
                <div 
                  className={styles.hex}
                  style={{backgroundImage: `url(${event.url})`}}
                >
                <div className={styles.hexTitle}>{event.title}</div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnAutreMonde;

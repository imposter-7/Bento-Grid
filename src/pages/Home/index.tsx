import React from 'react';
import styles from './Home.module.scss';
import { Grid } from '../../components/Grid';
import { Card } from '../../components/Card';
import stars from './../../assets/images/illustration-five-stars.webp';

export const Home = () => {
  return (
    <div className={styles['home']}>
      <Grid>
        <Card className={styles['socialMediaCard']}>
          <p>
            Social Media {'\n'}
            <span className={styles['yellow']}>10x</span>{' '}
            <span className={styles['italic']}>Faster</span> {'\n'}
            with AI
          </p>
          <div className={styles["stars-text-wrapper"]}>
            <div className={styles['imageWrapper']}>
              <img alt="stars" src={stars} />
            </div>
            <p className={styles['greyed']}>Over 4,000 5-star reviews</p>
          </div>
        </Card>
      </Grid>
    </div>
  );
};

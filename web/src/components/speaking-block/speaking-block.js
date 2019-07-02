import React from 'react'
import Divider from '../divider/divider'
import styles from './speaking-block.module.css'

const SpeakingBlock = () => (
  <>
    <div className={styles.speakingBlock}>
      <h2 className={styles.speakingTitle}>Speaking</h2>
      <p>
        I'm quite new to speaking and I've had the pleasure of speaking at a handful of meetups in
        and around the North of England,{' '}
        <a href="https://youtu.be/s6zjiMvZZ4A?t=286" target="_blank">
          some of which are on YouTube
        </a>
        . I like to talk about Web Development, Diabetes, Careers in Web Development and much more.
      </p>

      <h3>Upcoming Events</h3>
      <p>
        <b>JAMstack_conf London Welcome Drinks - 9th July 2019</b>
      </p>
      <p>
        I'll be speaking at the JAMstack_conf London welcome drinks event on the evening of 9th July
        at{' '}
        <a href="https://goo.gl/maps/x7YNoEyu1W5uLn1f6" target="_blank">
          Turners Old Star Pub
        </a>{' '}
        which starts from 6pm along with four other lightning talk speakers. It's my first time
        speaking in London so be sure to come say hello!
      </p>
    </div>
    <Divider />
  </>
)

export default SpeakingBlock

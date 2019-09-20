import React from 'react'
import Divider from '../divider/divider'
import styles from './speaking-block.module.css'

const SpeakingBlock = () => (
  <>
    <div className={styles.speakingBlock}>
      <h2>Speaking</h2>
      <p>
        I'm quite new to speaking and I've had the pleasure of speaking at a handful of meetups in
        and around the North of England,{' '}
        <a href="https://youtu.be/s6zjiMvZZ4A?t=286" target="_blank">
          some of which are on YouTube
        </a>
        . I like to talk about Web Development, Diabetes, Careers in Web Development and much more.
      </p>
    </div>
    <Divider />
  </>
)

export default SpeakingBlock

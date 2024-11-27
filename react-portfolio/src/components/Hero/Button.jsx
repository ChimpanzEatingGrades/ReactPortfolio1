// CREDIT TO AlimurtuzaCodes
// Source: https://uiverse.io/AlimurtuzaCodes/average-liger-0

import React from 'react';
import styles from './Button.module.css';

export const Button = () => {
  return (
    <button className={styles.btn}>
    
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className={styles.sparkle}>
    <path d="M19.949,5.536,16.465,2.05A6.958,6.958,0,0,0,11.515,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V10.485A6.951,6.951,0,0,0,19.949,5.536ZM18.535,6.95A4.983,4.983,0,0,1,19.316,8H15a1,1,0,0,1-1-1V2.684a5.01,5.01,0,0,1,1.051.78ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V5A3,3,0,0,1,7,2h4.515c.164,0,.323.032.485.047V7a3,3,0,0,0,3,3h4.953c.015.162.047.32.047.485Z"/>
    </svg>

   
    

    <span ><a className={styles.text} href= "https://bit.ly/EsfandiaryResume" 
               target="_blank">Resume</a></span>



    </button>
  );
};


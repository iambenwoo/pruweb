import React, { useState } from 'react';
import logo from '../Assets/brand2x.png';
import styles from './PruTopBar.module.css';
import NavItem from './NavItem';

const PruTopBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.prutopbar}>
      <div className={styles.topbarleft}>
        <img src={logo} alt='logo' width='150' height='36' />
        <NavItem title='menu.top.policyservice' />
        <NavItem title='menu.top.investments' />
        <NavItem title='menu.top.payment' />
        <NavItem title='menu.top.claims' />
        <NavItem title='menu.top.gieb' />
        <NavItem title='menu.top.prueshop' />
      </div>
      <div className={styles.topbarright}>
        <NavItem title='menu.top.lang' />
        <NavItem title='menu.top.profile' />
      </div>
    </div>
  )
}

export default PruTopBar;
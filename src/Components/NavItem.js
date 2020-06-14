import React, { useState } from 'react';
import styles from '../Components/PruTopBar.module.css';
import { useIntl } from 'react-intl';

const PruTopBar = (props) => {

  const intl = useIntl();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.navitem}>
      {intl.formatMessage({id:props.title, defaultMessage:"", description:""})}
    </div>
  )
}

export default PruTopBar;
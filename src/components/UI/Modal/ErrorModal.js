import React from 'react';
//포탈 기능을 사용하기 위한 import
import ReactDOM from 'react-dom';
import Card from '../Card';
import Button from '../Button/Button';
import styles from './ErrorModal.module.css';
import Portal from '../Portal/Portal';

const BackDrop = ({ onConfirm }) => {
  return (
    <div
      className={styles.backdrop}
      onClick={onConfirm}
    />
  );
};

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      <Portal destId='backdrop-root'>
        <BackDrop onConfirm={onConfirm} />, children
      </Portal>

      <Portal destId='overlay-root'>
        <ModalOverlay
          title={title}
          message={message}
          onConfirm={onConfirm}
        />
      </Portal>
      {/* <BackDrop onConfirm={onConfirm} /> */}
    </>
  );
};

export default ErrorModal;

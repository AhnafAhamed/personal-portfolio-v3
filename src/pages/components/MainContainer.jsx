import styles from '@/styles/components/MainContainer.module.css'

const MainContainer = ({ children }) => {
    
  return (
    <div className={styles.MainContainer}>
      {children}
    </div>
  );
};

export default MainContainer;
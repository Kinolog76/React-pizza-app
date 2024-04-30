import styles from "./NotFoundBlock.module.scss"

const NotFoundBlock = () => {
  return (
    <>
      <h1 className={styles.root}>
        <span>😕</span>
        Ничего не найдено :(
      </h1>
      <p>К сожалению данная страница отсутствует</p>
    </>
  );
};

export default NotFoundBlock;

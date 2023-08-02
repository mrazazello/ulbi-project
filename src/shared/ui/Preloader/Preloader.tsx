import cls from "./preloader.module.scss";

interface IProps {
  text?: string;
}

const PreloaderComponent = (props: IProps) => {
  const { text } = props;

  return (
    <div className={cls.loaderContainer}>
      <div className={cls.ldsEllipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
      {text && <div>{text}</div>}
    </div>
  );
};

export const Preloader = PreloaderComponent;

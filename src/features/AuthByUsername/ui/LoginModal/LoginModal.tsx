import { FC, Suspense } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { Preloader } from "shared/ui/Preloader/Preloader";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface IProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<IProps> = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <Suspense fallback={<Preloader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};

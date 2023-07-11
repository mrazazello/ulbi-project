import { FC } from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface IProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<IProps> = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};

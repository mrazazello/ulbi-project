import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { Page } from "shared/ui/Page/Page";

const FavoritesPage = () => {
  const { t } = useTranslation("favorites");
  const [isOpen, setOpen] = useState(false);

  return (
    <Page className="centeredContainer">
      <h1>{t("page title")}</h1>
      <div>centered content</div>
      <Button onClick={() => setOpen(true)}>open</Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Modal>
    </Page>
  );
};

export default FavoritesPage;

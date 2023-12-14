import { useTranslation } from "react-i18next";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import { Checkbox } from "shared/ui/Checkbox/Checkbox";
import { Input } from "shared/ui/Input/Input";
import { Page } from "shared/ui/Page/Page";

const LoginPage = () => {
  const { t } = useTranslation("login");

  return (
    <Page className="centeredContainer">
      <h1>{t("page title")}</h1>

      <Input name="login" placeholder={t("field_login")} />

      <Input name="password" placeholder={t("field_password")} />

      <Checkbox name="agree" placeholder="Long story short" value="test" />

      <Button theme={ButtonThemeEnum.PRIMARY}>{t("login")}</Button>
    </Page>
  );
};

export default LoginPage;

import { useTranslation } from "react-i18next";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { FormField } from "wigets/formField";

const LoginPage = () => {
  const { t } = useTranslation("login");
  return (
    <div className="centeredContainer">
      <h1>{t("page title")}</h1>

      <FormField title={t("field_login")} required error="error">
        <Input name="login" />
      </FormField>

      <FormField title={t("field_password")} required>
        <Input name="password" />
      </FormField>

      <Button theme={ButtonThemeEnum.PRIMARY}>{t("login")}</Button>
    </div>
  );
};

export default LoginPage;

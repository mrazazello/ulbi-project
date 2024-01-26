import { getArticleData } from "entities/Article";
import { getArticleUserCanEdit } from "pages/articleDetailPage/model/selectors/article";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonThemeEnum } from "shared/ui/Button/Button";
import cls from "./ArticleDetailPageHeader.module.scss";

interface IProps {
  className?: string;
}

export const ArticleDetailPageHeader: FC<IProps> = memo((props: IProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const userCanEdit = useSelector(getArticleUserCanEdit);
  const article = useSelector(getArticleData);

  const onBackToList = useCallback(() => {
    navigate(routePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${routePath.articles_detail}${article?.id}/edit`);
  }, [navigate, article]);

  return (
    <div className={classNames(cls.ArticleDetailPageHeader, {}, [className])}>
      <Button theme={ButtonThemeEnum.SECONDARY} onClick={onBackToList}>
        {t("Назад к списку")}
      </Button>
      {userCanEdit && (
        <Button theme={ButtonThemeEnum.SECONDARY} onClick={onEditArticle}>
          {t("Редактировать")}
        </Button>
      )}
    </div>
  );
});

ArticleDetailPageHeader.displayName = "ArticleDetailPageHeader";

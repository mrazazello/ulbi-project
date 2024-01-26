import { fetchArticleById, getArticleData } from "entities/Article";
import { articleDetailPageReducer } from "pages/articleDetailPage/model/slice";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  DynamicModuleLoader,
  ReducerListType,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import cls from "./ArticleEditPage.module.scss";

const reducers: ReducerListType = {
  articleDetailPage: articleDetailPageReducer,
};

const ArticleEditPage = () => {
  const { t } = useTranslation("article");
  const { id } = useParams();
  const isEdit = Boolean(id);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [id]);

  const article = useSelector(getArticleData);

  // if (!id) {
  //   return <h1>{t("Article not found")}</h1>;
  // }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <h1>{isEdit ? t("Редактирование страницы") : t("Создание страницы")}</h1>
      <div className={classNames(cls.editPagewrapper, {}, [])}>
        test: {article?.id}
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleEditPage;

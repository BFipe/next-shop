import { Category } from "@/src/_data/dataTypes";
import style from "./CategoryCard.module.scss";
import Link from "next/link";

type CategoryCardParams = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardParams) {
  return (
    <Link className={style.card} href={`/shop/${category.urlPath}`}>
      <div className={style.image}>
        <img src={category.imageUrl} alt={category.name} rel="preload" />
      </div>
      <div className={style.data}>
        <div className={style.heading}>
          <h3 className={style.name}>{category.name}</h3>
          <div className={style.addToCart}>ToDo</div>
        </div>
        <p className={style.title}>{category.title}</p>
      </div>
    </Link>
  );
}

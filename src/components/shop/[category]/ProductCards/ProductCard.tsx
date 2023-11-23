import { BaseProduct } from "@/src/_data/dataTypes";
import styles from "./ProductCard.module.scss";
import { Rate } from "antd";
import Link from "next/link";

type ProductCardParams = {
  product: BaseProduct;
  category: string;
};

export default function ProductCard({ product, category }: ProductCardParams) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <Link
            href={`/shop/${category}/${product.id}`}
            className={styles.name}
          >
            {product.name}
          </Link>
          <div className={styles.rating}>
            <Rate allowHalf disabled defaultValue={product.rating / 2} />
          </div>
        </div>
        <p className={styles.title}>{product.title}</p>
        <div className={styles.cart}>
          <p className={styles.price}>{product.price} р.</p>
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

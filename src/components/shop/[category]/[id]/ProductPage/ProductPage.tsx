import { BaseProduct } from "@/src/_data/dataTypes";
import { Rate } from "antd";
import React from "react";

import styles from "./ProductPage.module.scss";

type ProductPageParams = {
  product: BaseProduct;
};

function _getProductProperties(
  product: BaseProduct
): Array<[string, string | number | boolean]> {
  const {
    description,
    manufacturer,
    price,
    rating,
    id,
    name,
    title,
    imageUrl,
    ...properties
  } = product;
  return Object.entries(properties);
}

function _displayData(data: string | number | boolean) {
  if (typeof data === "boolean") {
    return data ? "✔" : "✖";
  }

  return data;
}

export default function ProductPage({ product }: ProductPageParams) {
  const properties = _getProductProperties(product).map((property) => {
    const uppercasedPropertyName =
      property[0].charAt(0).toUpperCase() + property[0].slice(1);
    property[0] = uppercasedPropertyName;
    return property;
  });

  return (
    <div className={styles.page}>
      <div className={styles.heading}>
        <div className={styles.image}>
          <img width="250px" src={product.imageUrl} alt={product.name} />
        </div>
        <div className={styles.header}>
          <div className={styles.presentation}>
            <h2 className={styles.name}>{product.name}</h2>
            <div className={styles.rating}>
              <Rate allowHalf disabled defaultValue={product.rating / 2} />
            </div>
          </div>
          <div className={styles.cart}>
            <p className={styles.price}>{product.price} р.</p>
            <button>Add to cart</button>
          </div>
        </div>
      </div>

      <p className={styles.title}>{product.title}</p>

      <p className={styles.description}>{product.description}</p>

      <table className={styles.properties}>
        <tbody>
          {properties.map((property) => (
            <tr key={property[0]} className={styles.row}>
              <td className={styles.key}>{property[0]}</td>
              <td className={styles.value}>{_displayData(property[1])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

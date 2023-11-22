import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </div>
  );
}

"use client";

import { Button, Modal } from "antd";
import "../AntdModalStyles.scss";
import styles from "./CartPurchaseModal.module.scss";

type CartPurchaseModalProps = {
  onOk?: () => void;
  onCancel?: () => void;
  showModal: boolean;
  totalAmount: number;
};

export default function CartPurchaseModal({
  onOk,
  onCancel,
  showModal,
  totalAmount,
}: CartPurchaseModalProps) {
  function handleCancel() {
    if (onCancel) {
      onCancel();
    }
  }

  function handleOk() {
    if (onOk) {
      onOk();
    }
  }

  return (
    <Modal
      open={showModal}
      title="Спасибо за покупку!"
      onCancel={handleCancel}
      onOk={handleOk}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={handleOk}
          style={{ color: "white", textShadow: "1px 1px 2px black" }}
        >
          ✓
        </Button>,
      ]}
    >
      <p className={styles.info}>
        Ваш заказ на сумму {totalAmount} р. готов к выдаче! Ожидайте звонка от
        нашего менеджера для уточнения деталей доставки.
      </p>
    </Modal>
  );
}

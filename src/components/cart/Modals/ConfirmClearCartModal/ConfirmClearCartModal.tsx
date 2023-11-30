import React from "react";

import { Button, Modal } from "antd";
import "../AntdModalStyles.scss";
import styles from "./ConfirmClearCartModal.module.scss";

type ConfirmClearCartModalProps = {
  onOk?: () => void;
  onCancel?: () => void;
  showModal: boolean;
};

export default function ConfirmClearCartModal({
  onOk,
  onCancel,
  showModal,
}: ConfirmClearCartModalProps) {
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
      title="Вы уверены, что хотите очистить корзину?"
      onCancel={handleCancel}
      onOk={handleOk}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={handleCancel}
          danger
          style={{ color: "white", textShadow: "1px 1px 2px black" }}
        >
          ✘
        </Button>,
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
      <p className={styles.info}>Это действие нельзя будет отменить.</p>
    </Modal>
  );
}

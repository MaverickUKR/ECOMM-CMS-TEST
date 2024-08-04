import React, { FC } from 'react';
import { Modal } from '@shopify/polaris';

export type DeleteUserModalProps = {
  active: boolean;
  handleChange: () => void;
  handleDelete: () => void;
};

const DeleteUserModal: FC<DeleteUserModalProps> = ({
  active,
  handleChange,
  handleDelete,
}) => {
  return (
    <Modal
      open={active}
      onClose={handleChange}
      title='Вы точно хотите удалить этого пользователя?'
      primaryAction={{
        content: 'Да',
        onAction: handleDelete,
      }}
      secondaryActions={[
        {
          content: 'Нет',
          onAction: handleChange,
        },
      ]}
    >
      <Modal.Section>
        <div>
          <p>Вы действительно хотите удалить этого пользователя?</p>
        </div>
      </Modal.Section>
    </Modal>
  );
};

export default DeleteUserModal;

import { FC } from 'react';
import { Modal, InlineStack, Text } from '@shopify/polaris';

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
      title='Are you sure you want to delete this user?'
      primaryAction={{
        content: 'Yes',
        onAction: handleDelete,
      }}
      secondaryActions={[
        {
          content: 'No',
          onAction: handleChange,
        },
      ]}
    >
      <Modal.Section>
        <InlineStack>
          <Text variant='bodyMd' as='p'>
            This is an irreversible process! Are you sure you want to delete
            this user?
          </Text>
        </InlineStack>
      </Modal.Section>
    </Modal>
  );
};

export default DeleteUserModal;

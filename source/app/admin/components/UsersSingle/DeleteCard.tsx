import { FC } from 'react';
import { Modal, Text } from '@shopify/polaris';

type DeleteCardProps = {
  active: boolean;
  handleChange: () => void;
  handleDelete: () => void;
};

const DeleteCard: FC<DeleteCardProps> = ({
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
        <Text as='p' variant='bodyMd'>
          Are you sure you want to delete this user? This is an irreversible
          process.
        </Text>
      </Modal.Section>
    </Modal>
  );
};

export default DeleteCard;

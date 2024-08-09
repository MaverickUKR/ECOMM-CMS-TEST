// import { BlockStack, Button, Card, InlineGrid, Text } from '@shopify/polaris';
// import { EAdminNavigation } from '~/admin/constants/navigation.constant';
// import { EditIcon } from '@shopify/polaris-icons';
// import { FC } from 'react';
// import { TProductDto } from '~/.server/admin/dto/products.dto';

// export type PrimaryInfoCardProps = {
//   product: TProductDto;
// };

// export const PrimaryInfoCard: FC<PrimaryInfoCardProps> = ({ product }) => {
//   return (
//     <Card>
//       <BlockStack gap='200'>
//         <InlineGrid columns='1fr auto'>
//           <Text as='h2' variant='headingSm'>
//             Primary info
//           </Text>
//           <Button
//             url={`${EAdminNavigation.products}/${product.id}/primary`}
//             accessibilityLabel='Export variants'
//             icon={EditIcon}
//           />
//         </InlineGrid>
//         <BlockStack gap='200'>
//           <Text as='h3' variant='headingXs' fontWeight='medium'>
//             Full Name
//           </Text>
//           <Text as='p' variant='bodyMd'>
//             {product.fullName}
//           </Text>
//         </BlockStack>
//         <BlockStack gap='200'>
//           <Text as='h3' variant='headingXs' fontWeight='medium'>
//             Email
//           </Text>
//           <Text as='p' variant='bodyMd'>
//             {user.email}
//           </Text>
//         </BlockStack>
//       </BlockStack>
//     </Card>
//   );
// };

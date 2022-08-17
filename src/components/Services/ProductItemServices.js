import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Divider,
  Box,
} from '@mui/material';

const ProductItemService = (product) => {
  return (
    <>
      <Card sx={{ backgroundColor: '#FFFFFF' }} className="productCard">
        <CardMedia
          component="img"
          height="200"
          image={require('../../assets/images/293399859_6014255531934980_2866254695672486007_n.jpg')}
          alt="green iguana"
        />
        <CardHeader
          title={
            <Typography
              variant="subtitle1"
              sx={{ fontSize: '18px', fontWeight: '700', color: '#000000' }}
              mt={2}
            >
              {product.name}
            </Typography>
          }
        />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              variant="body2"
              className={
                product?.saledescription?.[0]?.salePercent
                  ? 'typical_price'
                  : 'sale_price'
              }
            >
              {product.price} đ
            </Typography>
            <Typography variant="body2" className="sale_price">
              {product?.saledescription?.[0]?.salePercent
                ? product.price -
                  (product.price * product?.saledescription?.[0]?.salePercent) /
                    100
                : ''}
            </Typography>
          </Box>
          <Box sx={{ position: 'relative' }}>
            {product?.saledescription?.[0]?.salePercent ? (
              <img
                src={require('../../assets/images/iconSale.png')}
                alt="sale_img"
              />
            ) : (
              ''
            )}
            <Typography
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '12px',
              }}
            >
              {product?.saledescription?.[0]?.salePercent}
              {product?.saledescription?.[0]?.salePercent ? '%' : ''}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductItemService;

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

export default function ProductInCart({
  item,
  setItems,
  items,
  setChange,
  change,
}) {
  const [quantity, setQuantity] = useState(item?.quantity);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    setChange(!change);
    if (quantity > item?.stock) {
      setQuantity(item?.stock);
    } else {
      const newItems = items?.filter(
        (value) => value.productId === item?.productId
      );
      const itemsIncart = items?.filter(
        (value) => value.productId !== item?.productId
      );
      const tempItem = { ...newItems[0], quantity: quantity };
      const allItemUpdate = [...itemsIncart, tempItem];
      setItems(allItemUpdate);
    //  localStorage.setItem('items', JSON.stringify(allItemUpdate));
    }
  }, [quantity]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDeleteItem = () => {
    const newItems = items?.filter(
      (value) => value.productId !== item?.productId
    );
    localStorage.setItem('items', JSON.stringify(newItems));
    setItems(newItems);
    setChange(!change);
  };

  return (
    <Box
      width="80.4%"
      m="auto"
      sx={{ display: 'flex', justifyContent: 'space-evenly' }}
    >
      <Box
        width="20%"
        sx={{
          border: '1px solid #DEDEDE',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="150px"
          height="130px"
          src={require('../../assets/images/bg1.png')}
          alt="detailImage"
        />
      </Box>
      <Box
        width="40%"
        sx={{
          border: '1px solid #DEDEDE',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
          {item?.name}
        </Typography>
      </Box>
      {item?.type === 'service' ? (
        <Box
          width="15%"
          sx={{
            border: '1px solid #DEDEDE',
            height: '180px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {quantity}
        </Box>
      ) : (
        <Box
          width="15%"
          sx={{
            border: '1px solid #DEDEDE',
            height: '180px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button onClick={handleDecrease}>-</Button>
          <TextField
            disabled="true"
            color="secondary"
            value={quantity}
            onChange={(e) => {
              if (e.target.value > item?.stock) {
                setQuantity(item?.stock);
              } else {
                setQuantity(e.target.value);
              }
            }}
          />
          <Button onClick={handleIncrease}>+</Button>
        </Box>
      )}

      <Box
        width="15%"
        sx={{
          border: '1px solid #DEDEDE',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {item?.price}
      </Box>
      <Box
        width="10%"
        sx={{
          border: '1px solid #DEDEDE',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button onClick={handleDeleteItem}>
          <img
            width="35px"
            height="35px"
            src={require('../../assets/images/deleteIcon.png')}
            alt="detailImage"
          />
        </Button>
      </Box>
    </Box>
  );
}

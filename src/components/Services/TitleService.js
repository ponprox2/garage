import React, { useState, useEffect } from 'react';
import { Box, Typography, Input, Avatar, Button, Popper } from '@mui/material';
import AppToast from '../../myTool/AppToast';
import { useNavigate } from 'react-router-dom';
import formatMoneyWithDot from '../../constants/until';

export default function TitleService({ services }) {
  const storageItems = JSON.parse(localStorage.getItem('items'));
  const [openToast, setOpenToast] = useState(false);
  const [contentToast, setContentToast] = useState('');
  const [severity, setSeverity] = useState('');
  const navigate = useNavigate();

  const checkLogin = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setContentToast('bạn cần login để sử dụng tính năng này');
      setSeverity('error');
      setOpenToast(true);
      navigate('/login');
    }
  };

  const salePrice = () => {
    return (
      services?.[0]?.price -
      (services?.[0]?.price *
        services?.[0]?.saledescription?.[0]?.salePercent) /
        100
    );
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const handleOrder = () => {
    if (storageItems?.find((e) => e?.servicesId === services?.[0]?.serviceId)) {
      setContentToast('Sản phẩm đã có trong giỏ hàng');
      setSeverity('error');
      setOpenToast(true);
    } else {
      const productDetail = {
        _id: services?.[0]?._id,
        servicesId: services?.[0]?.serviceId,
        img: services?.[0]?.image,
        name: services?.[0]?.name,
        price: services[0]?.saledescription.length
          ? salePrice()
          : services?.[0]?.price,
        quantity: 1,
        type: 'service',
        typeProduct: 'confirm',
      };

      const listProduct = [...(storageItems || [])];
      if (productDetail) {
        listProduct.push(productDetail);
        localStorage.setItem('items', JSON.stringify(listProduct));
        setContentToast('Thêm sản phẩm vào giỏ hàng thành công');
        setSeverity('success');
        setOpenToast(true);
      }
    }
  };

  return (
    <Box
      width="80%"
      m="auto"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '133px',
      }}
    >
      <img
        className="detail_image"
        src={require('../../assets/images/bg1.png')}
        alt="detail_img"
      />
      <Box width="80%">
        <Box width="100%" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <Typography
              style={{
                fontSize: '35px',
                fontWeight: '700',
                marginBottom: '133px',
              }}
            >
              {services[0]?.name}
            </Typography>

            {services[0]?.saledescription.length ? (
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    style={{
                      fontSize: '25px',
                      fontWeight: '700',
                    }}
                  >
                    Giá cũ:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '25px',
                      fontWeight: '700',
                      color: '#ABABAB',
                      marginLeft: '61px',
                      textDecoration: 'line-through',
                    }}
                  >
                    {formatMoneyWithDot(services[0]?.price)} đ
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    style={{
                      fontSize: '25px',
                      fontWeight: '700',
                    }}
                  >
                    Giá KM:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '30px',
                      fontWeight: '700',
                      color: '#0486FF',
                      marginLeft: '61px',
                    }}
                  >
                    {/*{services[0]?.price -
                      (services[0]?.price *
                        services?.[0]?.saledescription?.[0]?.salePercent) /
                        100}{' '}*/}
                    {formatMoneyWithDot(salePrice())}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  style={{
                    fontSize: '25px',
                    fontWeight: '700',
                  }}
                >
                  Giá :
                </Typography>
                <Typography
                  style={{
                    fontSize: '30px',
                    fontWeight: '700',
                    color: '#0486FF',
                    marginLeft: '61px',
                  }}
                >
                  {services[0]?.price} đ
                </Typography>
              </Box>
            )}

            <Box
              width="100%"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '45px',
              }}
            >
              <Button variant="contained" onClick={handleOrder}>
                Đặt lịch
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <AppToast
        content={contentToast}
        type={0}
        isOpen={openToast}
        severity={severity}
        callback={() => {
          setOpenToast(false);
        }}
      />
    </Box>
  );
}

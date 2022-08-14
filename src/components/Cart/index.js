import React from "react";
import { Box, Typography, Input, Avatar, Button, Popper } from "@mui/material";
import ProductInCart from "./ProductInCart";

const mockData = [
  {
    imageProduct: require("../../assets/images/bg1.png"),
    nameProduct: "Bọc ghế da xe ô tô Fortuner - BGD002",
    quantity: 10,
    price: 600000,
  },
  {
    imageProduct: require("../../assets/images/bg1.png"),
    nameProduct: "Bọc ghế da xe ô tô Fortuner - BGD002",
    quantity: 7,
    price: 400000,
  },
  {
    imageProduct: require("../../assets/images/bg1.png"),
    nameProduct: "Bọc ghế da xe ô tô Fortuner - BGD002",
    quantity: 5,
    price: 300000,
  },
];
export default function Cart() {
  return (
    <Box>
      <Box>
        <Typography
          style={{
            fontSize: "55px",
            fontWeight: "700",
            marginBottom: "55px",
            marginTop: "102px",
            width: "100%",
            textAlign: "center",
          }}
        >
          GIỎ HÀNG
        </Typography>
      </Box>
      <Box
        width="80.4%"
        m="auto"
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Box
          width="20%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Sản phẩm
          </Typography>
        </Box>
        <Box
          width="40%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Tên sản phẩm
          </Typography>
        </Box>
        <Box
          width="15%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Số lượng
          </Typography>
        </Box>
        <Box
          width="15%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Giá tiền
          </Typography>
        </Box>
        <Box
          width="10%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Xóa
          </Typography>
        </Box>
      </Box>
      {mockData?.map((item) => (
        <ProductInCart item={item} />
      ))}

      <Box
        width="80.4%"
        m="auto"
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Box
          width="75%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Tổng tiền:
          </Typography>
        </Box>
        <Box
          width="15%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            6.500.000đ
          </Typography>
        </Box>
        <Box
          width="10%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}></Typography>
        </Box>
      </Box>
      <Box
        width="80.4%"
        m="auto"
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "50px" }}
      >
        <Button
          sx={{
            width: "146px",
            height: "49px",
            backgroundColor: "#EC2424",
            borderRadius: "11px",
          }}
        >
          <Typography
            sx={{ fontSize: "20px", fontWeight: "500", color: "#FFFFFF" }}
          >
            Thanh toán
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

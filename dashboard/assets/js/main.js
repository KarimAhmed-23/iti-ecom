/*------------- #General --------------*/

$('a[href="#"]').click(function ($) {
  $.preventDefault();
});
$("#sidebar-close").click(function () {
  $(".sidebar").removeClass("active");
});
$("#sidebar-open").click(function () {
  $(".sidebar").addClass("active");
});

$(".logoBox").click(function () {
  window.location.href = `${window.location.origin}/store/home/index.html`;
});

$(".logout-link").click(function () {
  localStorage.removeItem("userData");
  localStorage.removeItem("userRole");
  window.location.href = `${window.location.origin}/store/home/index.html`;
});

/*------------- #show and hide password   --------------*/

$(".password-field .eye-icon").on("click", function () {
  var password_input = $(this).parent().find(".password-input");

  if (password_input.attr("type") === "password") {
    password_input.attr("type", "text");
    $(this).addClass("hide");
  } else {
    password_input.attr("type", "password");
    $(this).removeClass("hide");
  }
});

// var usersListSchema = [
//   {
//     id: "1",
//     name: "seller1",
//     email: "seller1@gmail.com",
//     password: "123456",
//     role: "seller",
//   },
//   {
//     id: "2",
//     name: "seller2",
//     email: "seller2@gmail.com",
//     password: "123456",
//     role: "seller",
//   },
// ];
// var userDataSchema = {
//   id: "2",
//   name: "seller2",
//   email: "seller2@gmail.com",
//   role: "seller",
// };
// localStorage.setItem("userData", JSON.stringify(userDataSchema));
// localStorage.setItem("usersList", JSON.stringify(usersListSchema));

// ordersList = [
//   {
//     id: "1",
//     orderOwner: "1",
//     totalOrderPrice: 300,
//     paymentMethodType: "cash",
//     orderStatus: "processing",
//     billDetails: {
//       name: "karim 1",
//       phone: "01228594886",
//       city: "Cairo",
//       address: "details",
//     },
//     products: [
//       {
//         count: 2,
//         product: {
//           id: "1",
//           images: ["src2.png", "src2.png", "src3.png", "src4.png"],
//           name: "product 1",
//           description: "test description test description test description",
//           price: 200, // 200 EGP
//           discount: 10, // 10%
//           quantity: 50,
//           category: {
//             id: "6439d2d167d9aa4ca970649f",
//             name: "Electronics",
//           },
//           seller: {
//             id: "1",
//             name: "seller1",
//           },
//           rating: 4.8,
//         },
//         totalPrice: 400,
//       },
//     ],
//     createdAt: "20023/123/123",
//   },
//   {
//     id: "2",
//     orderOwner: "2",
//     totalOrderPrice: 400,
//     paymentMethodType: "cash",
//     orderStatus: "processing",
//     billDetails: {
//       name: "karim 2",
//       phone: "01228594886",
//       city: "Cairo",
//       address: "details",
//     },
//     products: [
//       {
//         count: 2,
//         product: {
//           id: "1",
//           images: ["src2.png", "src2.png", "src3.png", "src4.png"],
//           name: "product 1",
//           description: "test description test description test description",
//           price: 200, // 200 EGP
//           discount: 10, // 10%
//           quantity: 50,
//           category: {
//             id: "6439d2d167d9aa4ca970649f",
//             name: "Electronics",
//           },
//           seller: {
//             id: "1",
//             name: "seller1",
//           },
//           rating: 4.8,
//         },
//         totalPrice: 400,
//       },
//     ],
//     createdAt: "20023/123/123",
//   },
// ];
// localStorage.setItem("ordersList", JSON.stringify(ordersList));

// messagesList=[
//   {
//     id:1,
//     name:"karim",
//     email:"karim@gamil.com",
//     phone:"012285904885",
//     message : "i have a problem in sign to my account"
//   },
//   {
//     id:2,
//     name:"ahmed",
//     email:"ahmed@gamil.com",
//     phone:"012239485044",
//     message : "i have a problem in cash payment"
//   }
// ]
// localStorage.setItem("messagesList", JSON.stringify(messagesList));

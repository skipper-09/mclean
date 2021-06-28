module.exports = {
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/Auth/Login",
      },
      {
        source: "/register",
        destination: "/Auth/Register",
      },
      {
        source: "/reset-password",
        destination: "/Auth/Fpassword",
      },
      {
        source: "/admin",
        destination: "/admin/Dasboard",
      },
      {
        source: "/Data-produk",
        destination: "/admin/Produklist",
      },
      {
        source: "/Tambah-produk",
        destination: "/admin/Tambahproduk",
      },
      {
        source: "/Pengguna",
        destination: "/admin/Pengguna",
      },
      {
        source: "/Orderlist",
        destination: "/admin/orderlist",
      },
      {
        source: "/blog",
        destination: "/blog/blog",
      },
    ];
  },
};

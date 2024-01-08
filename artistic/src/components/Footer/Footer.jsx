function Footer() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-[1240px] mx-auto pt-10 pb-12">
        <div className="about">
          <h3 className="font-bold">Store Information</h3>
          <p className="flex gap-3 mt-12">
            <span>
              <i className="ri-map-pin-line text-2xl"></i>
            </span>
            <span>
              Artistic - Art & Craft Store
              <br /> 507-Union Trade
              <br /> Centre France
            </span>
          </p>
          <p className="flex gap-3 mt-5">
            <span>
              <i className="ri-mail-line text-2xl"></i>
            </span>
            <span>sales@yourcompany.com</span>
          </p>
          <p className="flex gap-3 mt-5">
            <span>
              <i className="ri-customer-service-line text-2xl"></i>
            </span>
            <span>000-000-0000</span>
          </p>
          <p className="flex gap-3 mt-5">
            <i className="ri-facebook-circle-line text-2xl cursor-pointer"></i>
            <i className="ri-instagram-line text-2xl cursor-pointer"></i>
            <i className="ri-twitter-x-line text-2xl cursor-pointer"></i>
            <i className="ri-linkedin-box-line text-2xl cursor-pointer"></i>
          </p>
        </div>
        <div className="about">
          <h3 className="font-bold">Products</h3>
          <ul className="mt-12 flex flex-col gap-6">
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Prices Drop</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i>{" "}
              <a href="">New Products</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Best Sales</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Contact Us</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="about">
          <h3 className="font-bold">Our Company</h3>
          <ul className="mt-12 flex flex-col gap-6">
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Prices Drop</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i>{" "}
              <a href="">New Products</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Best Sales</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Contact Us</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="about">
          <h3 className="font-bold">Your Account</h3>
          <ul className="mt-12 flex flex-col gap-6">
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Prices Drop</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i>{" "}
              <a href="">New Products</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Best Sales</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Contact Us</a>
            </li>
            <li>
              <i className="ri-arrow-right-line"></i> <a href="">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="topbar w-full h-10 bg-white text-center flex items-center justify-center border-t-2 border-b-2">
        <p>© 2024 - Ecommerce software by Technical Mickey™</p>
      </div>
    </>
  );
}

export default Footer;

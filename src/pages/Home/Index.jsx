import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import CardProduct from "../../components/CardProduct";
import CardPost from "../../components/CardPost";
import CardService from "../../components/CardService";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";

function Index() {
  const [slideIndex, setSlideIndex] = useState([]);
  const [serviceIndex, setServiceIndex] = useState([]);
  const [ productIndex, setProductIndex ] = useState([]);

  // Combined API call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const slideData = await axios.get(import.meta.env.VITE_API_URL + "/slides");
        const serviceData = await axios.get(import.meta.env.VITE_API_URL + "/services/highlighted");
        const productData = await axios.get(import.meta.env.VITE_API_URL + "/products/highlighted");

<<<<<<< Updated upstream
    // Call API Services
    axios
      .get(import.meta.env.VITE_API_URL + "/services/highlighted")
      .then((res) => {
        setServiceIndex(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // Call API Products
    axios
    .get(import.meta.env.VITE_API_URL + "/products")
    .then((res) => {
      setProductIndex(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
=======
        setSlideIndex(slideData.data.data);
        setServiceIndex(serviceData.data.data);
        setProductIndex(productData.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
>>>>>>> Stashed changes
  }, []);

  // const productList = [
  //   {
  //     id: 1,
  //     name: "Sửa rửa mặt Simple",
  //     slug: "sua-rua-mat-simple",
  //     image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
  //     price: 618000,
  //     discount: 494000,
  //   },
  //   {
  //     id: 2,
  //     name: "Dầu gội Dvinces",
  //     slug: "dau-goi-davinces",
  //     image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
  //     price: 334000,
  //     discount: 293000,
  //   },
  //   {
  //     id: 3,
  //     name: "Dầu xả Dvinces",
  //     slug: "dau-xa-davinces",
  //     image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
  //     price: 364060,
  //     discount: 320000,
  //   },
  //   {
  //     id: 4,
  //     name: "Kem dưỡng ẩm ATS",
  //     slug: "kem-duong-ats",
  //     image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
  //     price: 691000,
  //     discount: 549000,
  //   },
  //   {
  //     id: 5,
  //     name: "Kem chống nắng SkinAqua",
  //     slug: "kem-chong-nang-skinaqua",
  //     image: "https://static.30shine.com/shop-admin/2024/01/14/30SF3Q4K-5.jpg",
  //     price: 284570,
  //     discount: 159000,
  //   },
  // ];

  const postList = [
    {
      name: "Bài viết số 1",
      slug: "bai-viet-so-1",
      image: "./src/assets/images/blog/01.webp",
      createdAt: "2024-10-19",
      author: "Nguyễn Văn A",
      content: "Nội dung tóm tắt của bài viết số 1...",
    },
    {
      name: "Hướng dẫn học React",
      slug: "huong-dan-hoc-react",
      image: "./src/assets/images/blog/02.webp",
      createdAt: "2024-10-18",
      author: "Trần Thị B",
      content: "React là một thư viện JavaScript...",
    },
    {
      name: "Khám phá thế giới lập trình",
      slug: "kham-pha-the-gioi-lap-trinh",
      image: "./src/assets/images/blog/03.webp",
      createdAt: "2024-10-17",
      author: "Lê Văn C",
      content: "Lập trình là một lĩnh vực thú vị...",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Trang chủ - 30GLOW</title>
        <meta name="description" content="meo meo meo" />
      </Helmet>
      <Header />
      {/* Start slider section */}
      <section className="p-0 m-0">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000000",
            "--swiper-pagination-color": "#000000",
          }}
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {slideIndex.length > 0 ? (
            slideIndex.map((item) => (
              <SwiperSlide key={item.id}>
                <Image src={import.meta.env.VITE_URL + item.desktop} fluid className="w-100 height-100" alt={item.name} />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <Image src="https://storage.30shine.com/banner/2024/20240821_banner_thuonggia_w.jpg" fluid className="w-100 height-100" alt="Slide 1" />
            </SwiperSlide>
          )}
        </Swiper>
      </section>

      {/* End slider section */}

      {/* Start buy section */}
      <Container className="my-2">
        <Row className="row-cols-1 row-cols-lg-4 g-4">
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-primary border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-primary">
                  <i className="bi bi-truck" />
                </div>
                <h5 className="fw-bold">Giao hàng siêu tốc 2h</h5>
                <p className="mb-0">Nhận hàng ngay trong 2 giờ! Nhanh chóng, tiện lợi.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-danger border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-danger">
                  <i className="bi bi-credit-card" />
                </div>
                <h5 className="fw-bold">Bảo hành 3 ngày</h5>
                <p className="mb-0">Không hài lòng? Hoàn tiền 100%!</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-success border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-success">
                  <i className="bi bi-minecart-loaded" />
                </div>
                <h5 className="fw-bold">Đổi trả tận nơi</h5>
                <p className="mb-0">Đổi trả miễn phí, tận nơi. Dễ dàng!</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="border-0 rounded-0 border-bottom border-warning border-3 w-100">
              <Card.Body className="text-center">
                <div className="h1 fw-bold my-2 text-warning">
                  <i className="bi bi-headset" />
                </div>
                <h5 className="fw-bold">Hỗ trợ 24/7</h5>
                <p className="mb-0">Hỗ trợ khách hàng 24/7</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/*end row*/}
      </Container>
      {/* End buy section */}

      {/* Start service section */}
      <Container className="my-5">
        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">DỊCH VỤ HOT</h3>
          </div>
        </div>
<<<<<<< Updated upstream
        <Row className='row-cols-1 row-cols-lg-4 g-4'>{serviceIndex.length > 0 ? serviceIndex.map((item, index) => <CardService key={index} {...item} />) : <h3 className='text-center pt-3'>Không có dịch vụ</h3>}</Row>
=======
        <Row className="row-cols-1 row-cols-lg-4 g-4">
          {serviceIndex && Object.keys(serviceIndex).length > 0 ? (
            Object.values(serviceIndex).map((item, index) => <CardService key={index} {...item} />)
          ) : (
            <h3 className="text-center pt-3">Không có dịch vụ</h3>
          )}
        </Row>
>>>>>>> Stashed changes
      </Container>
      {/* End service section */}

      {/* Start product section */}
      <Container className="my-5">
        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">SẢN PHẨM BÁN CHẠY</h3>
          </div>
        </div>
<<<<<<< Updated upstream
        <Row className='row-cols-1 row-cols-lg-5 g-4'>{productIndex.length > 0 ? productIndex.map((product, index) => <CardProduct key={index} {...product} />) : <h3 className='text-center'>Không có sản phẩm</h3>}</Row>
=======
        <Row className="row-cols-1 row-cols-lg-4 g-4">
          {productIndex && Object.keys(productIndex).length > 0 ? (
            Object.values(productIndex).map((item, index) => <CardProduct key={index} {...item} />)
          ) : (
            <h3 className="text-center">Không có sản phẩm</h3>
          )}
        </Row>
>>>>>>> Stashed changes
      </Container>
      {/* End product section */}

      {/* Start Post */}
      <Container className="my-5">
        <div className="text-start border-0 rounded-0 border-start border-primary border-5 h-100 mb-3">
          <div className="ms-2">
            <h3 className="mb-0 h3 fw-bold text-uppercase text-primary-emphasis">Tin tức mới nhất về 30Glow</h3>
          </div>
        </div>

<<<<<<< Updated upstream
        <Row className='row-cols-1 row-cols-lg-3 g-4'>{postList.length > 0 ? postList.map((post, index) => <CardPost key={index} {...post} />) : <h3 className='text-center'>Không có bài đăng</h3>}</Row>
=======
        <Row className="row-cols-1 row-cols-lg-3 g-4">{postList ? postList.map((post, index) => <CardPost key={index} {...post} />) : <h3 className="text-center">Không có bài đăng</h3>}</Row>
>>>>>>> Stashed changes
        {/*end row*/}
      </Container>
      {/* End Post */}

      <Footer />
    </>
  );
}

export default Index;

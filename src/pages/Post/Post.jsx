/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import Headers from "../../layouts/Header";
import Footers from "../../layouts/Footer";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import { Helmet } from "react-helmet";
import CardPost from "../../components/CardPost";
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
function Post() {
  return (
    <>
      <Helmet>
        <title>Tin Tức - 30GLOW</title>
        <meta name="description" content="Mô tả của bài viết" />
      </Helmet>
      <Headers />
      <BreadcrumbComponent props={[{ name: "Tin Tức", url: "/tin-tuc" }]} />
      <Container className="my-5">
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold text-uppercase text-center text-primary-emphasis">Tin Tức - 30GLOW</h2>
            <p className="text-center fs-4 text-muted">30GLOW – Hệ thống làm đẹp hiện đại, kết hợp dịch vụ tạo kiểu tóc và cung cấp sản phẩm chăm sóc chất lượng.</p>
          </Col>
        </Row>
        <Row className="row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
          {postList ? postList.map((post, index) => <CardPost key={index} {...post} />) : <h3 className="text-center">Không có bài đăng</h3>}
        </Row>
        {/*end row*/}
      </Container>
      <Footers />
    </>
  );
}

export default Post;

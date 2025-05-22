import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { BlogItem, blogs } from "./Blogs";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import SubHeading from "../components/SubHeading";
// import { blogs } from "../../data/blogs";
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === Number(id));
  if (!blog) {
    return <Navigate to="/blogs" />;
  }
  const latestBlogs = blogs.filter((item) => item.id !== Number(id)) || [];
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="Blog Details" />
      <div className="bg-primary/5 relative text-primary_text">
        <div className="wrapper py-[5rem] relative z-10">
          <div className="flex flex-col gap-2 pb-[3rem] p-3 sm:p-5 bg-secondary/10 rounded-xl mb-[3rem]">
            <img
              data-aos="fade-up"
              src={blog.image}
              alt=""
              className="w-full rounded-xl object-cover aspect-[4/3] max-h-[70vh]"
            />
            <div className="flex flex-col gap-2">
              <div
                data-aos="fade-up"
                className="flex justify-between items-center font-light mt-[0.8rem]"
              >
                <div className="rounded-2xl bg-primary text-white font-medium px-3 py-1 text-sm w-fit">
                  By Admin
                </div>
                <p className="text-gray-800 text-[.8rem]">12th May 2023</p>
              </div>
              <h4
                data-aos="fade-up"
                className="heading-2_1 leading-tight mt-[1rem] pb-[1.5rem]"
              >
                {/* {blog.title} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                iure neque nihil
              </h4>
              {/* <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                data-aos="fade-up"
                className="hyphen-auto leading-relaxed text-gray-800 border-t border-primary/30 pt-[2rem]"
              ></div> */}
              <p
                data-aos="fade-up"
                className="desc hyphen-auto leading-relaxed text-gray-800"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, porro excepturi et eos corrupti magnam vel voluptatibus
                aperiam atque voluptatum dolor ullam alias similique hic aliquam
                provident minima cumque doloremque! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat, porro excepturi et eos
                corrupti magnam vel voluptatibus aperiam atque voluptatum dolor
                ullam alias similique hic aliquam provident minima cumque
                doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quaerat, porro excepturi et eos corrupti magnam vel
                voluptatibus aperiam atque voluptatum dolor ullam alias
                similique hic aliquam provident minima cumque doloremque! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                porro excepturi et eos corrupti magnam vel voluptatibus aperiam
                atque voluptatum dolor ullam alias similique hic aliquam
                provident minima cumque doloremque! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quaerat, porro excepturi et eos
                corrupti magnam vel voluptatibus aperiam atque voluptatum dolor
                ullam alias similique hic aliquam provident minima cumque
                doloremque!
              </p>
            </div>
          </div>
          {latestBlogs.length > 0 && (
            <div className="pt-[3rem]">
              <SubHeading heading="Recent Blogs" />
              <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {blogs
                  .filter((item) => item.id !== blog.id)
                  .slice(0, 3)
                  .map((item) => (
                    <BlogItem key={item.id} blog={item} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <WebsiteFooter />
    </>
  );
};

export default BlogDetails;

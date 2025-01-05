import Link from "next/link";
import {
  getAllPosts,
  getAllAuthors,
  getAllTags,
  getAllCategories,
} from "@/lib/wordpress";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import PostCard from "@/components/posts/post-card";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    author?: string;
    tag?: string;
    category?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const { author, tag, category, page: pageParam } = params;

  const posts = await getAllPosts({ author, tag, category });
  const authors = await getAllAuthors();
  const tags = await getAllTags();
  const categories = await getAllCategories();

  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const postsPerPage = 9;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <>
      <main>
        <section
          className="section position-relative"
          style={{
            backgroundImage:
              "url(https://www.drahmedalattar.com/Assets/image/banner3.jpg)",
          }}
        >
          <div className="image-overlay" />
          <div
            className="r-container position-relative                "
            style={{
              zIndex: "2",
            }}
          >
            <div className="d-flex flex-column gap-3">
              <h3 className="accent-color font-1 fw-semibold">المدونة</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">الرئيسية</Link>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                    المدونة
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="r-container">
            <div className="d-flex flex-column gap-3 text-center">
              <h6 className="fw-semibold font-1 accent-color-1 ls-2">
                تحقق من
              </h6>
              <h3 className="accent-color font-2 fw-semibold">مدونة ومقالات</h3>
              <p
                className="font-2 fw-light mx-auto"
                style={{
                  maxWidth: "912px",
                }}
              >
                يمكنك قراءة العديد من المقالات المفيدة حول طب العظام والعناية
                بالعظام والمفاصل في مدونتنا. نقدم نصائح عملية للحفاظ على صحة
                عظامك، ونشارك أحدث الأبحاث والتطورات في هذا المجال. سواء كنت
                تعاني من آلام مزمنة أو إصابات رياضية، ستجد هنا معلومات قيمة
                لمساعدتك على التعافي والعيش حياة صحية.
              </p>

              {paginatedPosts.length > 0 ? (
                <div className="row row-cols-1 row-cols-lg-3 text-start">
                  {paginatedPosts.map((post: any) => (
                    <div className="col mb-3" key={post.id}>
                      <div
                        className="card p-3 bg-accent-color-1 rounded-4 with-border-bottom"
                        style={{
                          height: "335px",
                          overflow: "auto",
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: post.content?.rendered || "Untitled Post",
                          }}
                          className="text-white max-w-[335px] font-2 text-end flex flex-col gap-2 mb-3"
                        ></div>
                        <div className="d-flex flex-row gap-4 justify-content-between text-white text-xs">
                          <div className="d-flex align-items-center gap-2">
                            <i className="fa-regular fa-calendar" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <i className="fa-regular fa-user" />
                            Dr. Ahmed El-Attar
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="font-2 w-full !py-20 rounded-lg bg-accent/25 flex items-center justify-center">
                  <h2>لا توجد مقالات حاليا</h2>
                </div>
              )}

              <div className="mt-8 not-prose">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        className={
                          page === 1 ? "pointer-events-none text-muted" : ""
                        }
                        href={`/blog?page=${Math.max(page - 1, 1)}${
                          category ? `&category=${category}` : ""
                        }${author ? `&author=${author}` : ""}${
                          tag ? `&tag=${tag}` : ""
                        }`}
                      />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href={`/blog?page=${page}`}>
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        className={
                          page === totalPages
                            ? "pointer-events-none text-muted"
                            : ""
                        }
                        href={`/blog?page=${Math.min(page + 1, totalPages)}${
                          category ? `&category=${category}` : ""
                        }${author ? `&author=${author}` : ""}${
                          tag ? `&tag=${tag}` : ""
                        }`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </section>
      </main>
      ;
    </>
  );
}

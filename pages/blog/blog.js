import Navbar from "../../components/Navbar";
import Articel from "../../components/Blog Component/articel";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
export default function blog({ data }) {
  return (
    <div>
      <Layout title="Blog">
        <Navbar />
        <div className="main-blog">
          <div className="container mt-5">
            <h2>Blog</h2>
            <hr />
            <div className="mt-5 ">
              {data.articles.map((articles) => (
                <Articel articles={articles} key={articles.title} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=6c7c7bf3c51349ff9409cc02617757be"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

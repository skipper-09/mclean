import About from "../components/About";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Harga from "../components/Harga";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Team from "../components/Team";

export default function Home() {
  return (
    <div>
      <Layout title="Home">
        <Navbar />
        <Jumbotron />
        <main id="main">
          <About />
          <Features />
          <Harga />
          <Faq />
        </main>
        <Team />
        <Footer />
      </Layout>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     "https://newsapi.org/v2/top-headlines?country=id&apiKey=6c7c7bf3c51349ff9409cc02617757be"
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

//@ts-check
import Childfeatures from "./Child Component/Childfeatures";

export default function Features() {
  const data = [
    {
      imgUrl: "assets/img/values-1.png",
      judul: "Pekerja Propesional",
      content: "Tenaga Pekerja ahli dan propesional",
    },
    {
      imgUrl: "assets/img/values-2.png",
      judul: "Pekerjaan cepat ",
      content: "pengerjaan cepat dan bersih diutamakan kebersihan",
    },
    {
      imgUrl: "assets/img/values-3.png",
      judul: "pekerja Terbaik",
      content: "pekerja propesional ahli",
    },
  ];
  return (
    <div>
      <section id="values" className="values">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <p className=" text-uppercase">Kelebihan Kami</p>
          </header>
          <div className="row ">
            {data.map((f) => (
              <Childfeatures
                key={f.judul}
                imgUrl={f.imgUrl}
                judul={f.judul}
                content={f.content}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Accordion from "../components/Accordion";

const faqItems = [
  {
    title: "Who We Are",
    content:
      "YEP!@Brown is an entirely free entrepreneurship program for local high school students in college towns. The program is led and facilitated by university students. We believe that by opening Brown's doors to the Providence community, we will hopefully teach the entrepreneurial process to the next generation of change makers.",
  },
  {
    title: "What Is YEP?",
    content:
      "YEP! (Youth Entrepreneurship Program) was founded in 2019 by three Brown University students: Audrey Shapiro, Lucia Winton, and Leah Lam to address strained town-gown relations and the lack of entrepreneurship opportunities in under-resourced communities. Since then, we have grown to serve hundreds of students across Providence.",
  },
  {
    title: "How Do I Apply?",
    content:
      "Applications are open to high school students in the Providence area. Our programs are completely free of charge. You can apply by filling out the contact form on our Contact page, and our team will follow up with next steps and program dates.",
  },
  {
    title: "What Programs Do You Offer?",
    content:
      "We offer three core programs: YEP 1.0 for beginners, YEP 2.0 for intermediate entrepreneurs, and YEP Summer Camp for all levels. Each program is designed to give students hands-on experience building and pitching business ideas, with mentorship from Brown University students.",
  },
  {
    title: "Is YEP Really Free?",
    content:
      "Yes — all YEP programs are 100% free for participants. We are funded through Brown University and community partnerships so that cost is never a barrier to participation for any student.",
  },
  {
    title: "How Can I Get Involved as a Mentor?",
    content:
      "If you're a Brown University student interested in becoming a mentor or program facilitator, reach out through our Contact page. We recruit mentors each semester and look for students passionate about entrepreneurship and community engagement.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#FFDE7C] font-vazirmatn">
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-10 md:py-20">
        <div className="mb-12">
          <h1 className="font-viga text-5xl font-black uppercase tracking-tight text-[#0f0f2d] sm:text-6xl md:text-7xl">
            FAQ
          </h1>
          <p className="mt-3 max-w-xl text-sm text-[#0f0f2d]/80 md:text-base">
            Answers to common questions about YEP!@Brown, our programs, and how to get involved.
          </p>
        </div>

        <Accordion items={faqItems} />

        <div className="mt-12 rounded-3xl border-2 border-[#0f0f2d] bg-[#0f0f2d] p-8 text-center">
          <h2 className="font-viga text-2xl font-black uppercase text-[#FFDE7C]">
            Still have questions?
          </h2>
          <p className="mt-2 text-sm text-[#FFDE7C]/80">
            Reach out to us directly and we'll get back to you.
          </p>
          <a
            href="/contact"
            className="font-viga mt-6 inline-block rounded-full bg-[#FFDE7C] px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#0f0f2d] transition hover:bg-[#f5d060]"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

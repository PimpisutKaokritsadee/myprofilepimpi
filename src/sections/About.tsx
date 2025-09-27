import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-y-10 gap-x-8 md:grid-cols-12 md:gap-x-12 md:gap-y-12 lg:gap-x-16">
          {/* รูปฝั่งซ้าย */}
          <Reveal type="fade-up" className="md:col-span-5 lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-black/5 shadow-md">
              <div className="aspect-[3/4] sm:aspect-[4/5]">
                <img
                  src="src\images\pale.jpeg"
                  alt="Profile"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* เนื้อหาฝั่งขวา */}
          <Reveal type="fade-up" delay={120} className="md:col-span-7 lg:col-span-8">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              About Myself
            </h3>

            <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg lg:text-[1.125rem] lg:leading-8 max-w-none lg:max-w-3xl break-normal">
              สวัสดีค่ะ หนูชื่อ พิมพ์พิสุทธิ์ เก้ากฤษฎี ชื่อเล่นว่า ปอร์เช่
               ปัจจุบันกำลังศึกษาอยู่ชั้นปี 4 สาขาวิทยาการคอมพิวเตอร์ค่ะ
               ตอนนี้กำลังมองหาโอกาสฝึกงานเพื่อพัฒนาทักษะและเรียนรู้
               การทำงานจริง ๆ นอกห้องเรียนระหว่างเรียนเคยได้ลองทำ
               โปรเจกต์เลยพอได้รู้จักการทำงานในบทบาทต่าง ๆ บ้าง ซึ่งทำให้เห็นว่าการทำงานจริงน่าจะมีราย
               ละเอียดและความท้าทายอีกหลายอย่างที่ยังไม่เคยเจอ เลย
               อยากใช้โอกาสฝึกงานครั้งนี้ในการเรียนรู้เพิ่มเติม และพัฒนา
               ตัวเองให้พร้อมสำหรับการทำงานในอนาคตค่ะ
            </p>

            <Reveal type="fade-up" delay={220}>
              <div className="mt-6 sm:mt-8 border-t border-gray-200 pt-6">
                <dl className="mx-auto grid max-w-md gap-x-8 gap-y-6 sm:max-w-xl sm:grid-cols-2 lg:max-w-3xl">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Date of birth</dt>
                    <dd className="mt-1 font-semibold text-gray-900">September 19, 2003</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Interest</dt>
                    <dd className="mt-1 font-semibold text-gray-900">Music, Reading</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Contact</dt>
                    <dd className="mt-1 font-semibold text-gray-900">65160300@go.buu.ac.th</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 font-semibold text-gray-900">+66 834505655</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


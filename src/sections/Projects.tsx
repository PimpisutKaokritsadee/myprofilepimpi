import { Sparkles } from "lucide-react";
import { useState } from "react";
import Reveal from "../components/Reveal";
import ProjectDialog from "../components/ProjectDialog";
import type { Project, ProjectKey, ProjectDetail } from "../types/projects";

const projects: Project[] = [
  {
    key: "coffee",
    title: "Coffee-Shop(D-Coffee)",
    desc: "ร้านกาแฟที่รวมระบบ POS, สินค้า, สต็อก, โปรโมชั่น, สมาชิก, พนักงาน และเงินเดือน",
    tags: ["Vue", "TypeScript", "Vuetify"],
    image: "src/images/coffee-pos.png",
  },
  {
    key: "ceth",
    title: "Cooperative Education Training Hour Tracking System",
    desc: "ระบบสำหรับจัดการลงทะเบียน/ยกเลิกการอบรมและเก็บชั่วโมงสหกิจของนักศึกษาแต่ละคน",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "src/images/ceth.png",
  },
];

function getModalContent(key: ProjectKey): ProjectDetail {
  switch (key) {
    case "coffee":
      return {
        title: "Coffee-Shop(D-Coffee)",
        img: "src/images/coffee-logg.png",
        content: [
          { type: "p", text: "D-Coffee เป็นระบบจัดการร้านกาแฟ ที่รวมฟังก์ชัน POS (Point of Sale), การจัดการสต็อกสินค้า, สมาชิกและพนักงาน, เงินเดือน/เวลาเข้า-ออกงาน, และ โปรโมชั่น เข้าไว้ด้วยกัน" },
          { type: "p", text: "โครงการนี้พัฒนาในรูปแบบ กลุ่ม 8 คน โดยแบ่งเป็น 2 เฟส:" },
          {
            type: "ol",
            items: [
              "เฟสแรก (กลุ่มย่อย 4 คน) → พัฒนาในขอบเขตเล็กเพื่อทดสอบระบบ",
              "เฟสสอง (รวมกลุ่มใหญ่ 8 คน) → รวมระบบเข้าด้วยกันและพัฒนาเป็นระบบที่สมบูรณ์มากขึ้น",
            ],
          },
          { type: "hr" },
          { type: "h3", text: "หน้าที่และสิ่งที่ทำ" },
          { type: "h3", text: "เฟสแรก (กลุ่มย่อย)" },
          {
            type: "ul",
            items: [
              "พัฒนา หน้า POS สำหรับขายหน้าร้าน",
              "พัฒนา หน้าสมาชิก (Member Management) เพื่อจัดการข้อมูลสมาชิก",
            ],
          },
          { type: "h3", text: "เฟสสอง (กลุ่มใหญ่)" },
          {
            type: "ul",
            items: [
              "ปรับปรุง UI ของตารางข้อมูล ให้ใช้งานง่ายขึ้น",
              "พัฒนา ปุ่มกด และ Popup สำหรับเพิ่ม/ลบข้อมูล",
              "ทำงาน เฉพาะฝั่ง Frontend (User Interface) เน้นการใช้งานจริงและความสวยงามของระบบ",
            ],
          },
        ],
        rows: [
          ["Type", "Website"],
          ["Tech", "Vue, Vuetify, TypeScript"],
          ["Git URL กลุ่มย่อย", [
            "https://gitlab.com/webprogramming_65160165/projectterm_front-end",
            "https://gitlab.com/webprogramming_65160165/projectterm_back-end"
          ]],
          ["Git URL กลุ่มใหญ่", [
            "https://gitlab.com/webprograming_65160311/project_goodluck"
          ]]
        ]

      };

    case "ceth":
      return {
        title: "CETH — Activity & Certificate System",
        img: "src/images/ceth1.png",
        content: [
          {
            type: "p",
            text: "ระบบจัดการชั่วโมงอบรมสหกิจพัฒนานักศึกษา เพื่อความสะดวกในการจัดกิจกรรมอบรม แบ่งเป็น 2 ฝั่งผู้ใช้งานหลัก:",
          },
          {
            type: "p",
            text: "ฝั่งแอดมิน (Admin):",
          },
          {
            type: "ul",
            items: [
              "จัดการกิจกรรม (เพิ่ม/ลบ/แก้ไข)",
              "จัดการอาหาร ห้อง และผู้ใช้",
              "ประเมินกิจกรรมและสรุปผล",
            ]
          },
          {
            type: "p",
            text: "ฝั่งนิสิต (Student):",
          },
          {
            type: "ul",
            items: [
              "ลงทะเบียนและยกเลิกกิจกรรม",
              "ตรวจสอบชั่วโมงการอบรมที่เข้าร่วม",
              "ดูและสั่งพิมพ์เกียรติบัตร",
              "ดูประวัติการเข้าร่วมอบรม"
            ]
          },
          { type: "hr" },
          { type: "h3", text: "หน้าที่และสิ่งที่ทำ" },
          {
            type: "p",
            text: "งานที่รับผิดชอบ Frontend เป็นหลัก โดยขึ้นหน้าใหม่ เช่น:",
          },
          {
            type: "ul",
            items: [
              "หน้าดูรายละเอียดกิจกรรม(แอดมิน/นิสิต)",
              "หน้าสรุปผลกิจกรรมแอดมิน",
              "หน้าหลักของนิสิต",
              "หน้าแบบประเมินสำหรับนิสิต",
              "หน้าลิสต์เกียรติบัตร",
              "หน้าส่งเกียรติบัตร (Upload Certificate + OCR)",
              "พัฒนา Reusable UI Components เช่น Dialog / Modal สำหรับ Alert และ Confirm ใช้ซ้ำได้หลายหน้า ปรับหัวข้อ ข้อความ และปุ่มได้จาก Props Button Component ที่สามารถกำหนดสี ขนาด และ action ได้",
              "ทำให้ระบบ Responsive รองรับการใช้งานทั้งบนคอมและมือถือ",
              "เชื่อมต่อ Backend ด้วยตนเองในบางส่วน เช่น หน้ารายละเอียดกิจกรรม การลงทะเบียนกิจกรรม และ ส่งเกียรติบัตร"
            ]
          }
        ],
        rows: [
          ["Type", "Web App"],
          ["Tech", "React, TypeScript, Tailwind"],
          ["Git URL", [
            "https://github.com/playerwave/ceth-frontend",
            "https://github.com/playerwave/ceth-backend"
          ]],
        ],
      };


    default:
      throw new Error(`Unknown project key: ${key}`);
  }
}



export default function ProjectsSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<ProjectKey | null>(null);

  const openModal = (key: ProjectKey) => {
    setSelected(key);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    // ถ้าต้องการเคลียร์ค่า selected หลังปิด:
    // setSelected(null);
  };

  const detail = selected ? getModalContent(selected) : null;

  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal type="fade-up">
          <h2 className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 text-white font-semibold text-sm md:text-base">
            <Sparkles size={16} className="shrink-0" />
            {"PROJECTS"}
          </h2>
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
          {projects.map((proj, i) => (
            <Reveal key={proj.key} type="fade-up" delay={i * 120}>
              <article
                className="flex flex-col justify-between h-full rounded-2xl border-2 border-gray-200 bg-white p-6 
                transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-indigo-500 cursor-pointer"
                onClick={() => openModal(proj.key)}
              >
                <div>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-40 w-full object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-lg text-gray-900">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{proj.desc}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ใช้ Dialog ที่แยกไฟล์แล้ว */}
      <ProjectDialog open={open} detail={detail} onClose={closeModal} />
    </section>
  );
}

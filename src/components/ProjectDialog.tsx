import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import Reveal from "../components/Reveal";
import type { ProjectDetail, ContentBlock } from "../types/projects";

type ProjectDialogProps = {
    open: boolean;
    detail: ProjectDetail | null;
    onClose: () => void;
};

export default function ProjectDialog({ open, detail, onClose }: ProjectDialogProps) {
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!open) return;
        const origOverflow = document.body.style.overflow;
        const origPadRight = document.body.style.paddingRight;

        const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        if (scrollbarW > 0) document.body.style.paddingRight = `${scrollbarW}px`;

        closeBtnRef.current?.focus();
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = origOverflow;
            document.body.style.paddingRight = origPadRight;

            document.removeEventListener("keydown", onKey);
        };
    }, [open, onClose]);

    if (!open || !detail) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <Reveal type="zoom">
                {/* การ์ดโมดัล */}
                <div
                    className="relative w-full max-w-5xl rounded-3xl bg-white shadow-2xl ring-1 ring-black/10
                     overflow-y-auto max-h-[90vh] md:max-h-none flex flex-col overscroll-contain"
                    style={{ WebkitOverflowScrolling: "touch" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* ปุ่มปิด อยู่ข้างนอก ไม่โดนตัด */}
                    <button
                        ref={closeBtnRef}
                        className="absolute right-4 top-4 z-20 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        aria-label="Close"
                        onClick={onClose}
                    >
                        <X />
                    </button>

                    {/* เนื้อหาภายใน */}
                    <div className="grid md:grid-cols-12 md:h-[560px]">
                        {/* รูป (บนมือถือจะอยู่บนสุด) */}
                        <div className="md:col-span-7 overflow-hidden">
                            <img
                                src={detail.img}
                                alt={detail.title}
                                className="w-full h-40 sm:h-48 object-cover md:h-full"  // <-- ย่อรูปบนมือถือ
                            />
                        </div>

                        {/* ฝั่งข้อความ */}
                        <div className="md:col-span-5 p-6 md:p-10 md:h-full bg-white overflow-hidden relative">
                            {/* mask รอยต่อ ซ่อนตอนมือถือ */}
                            <div className="hidden md:block pointer-events-none absolute inset-y-0 -left-3 w-6 bg-white"></div>

                            {/* พื้นที่สกอลของเนื้อหา: มือถือ = ไม่สกอล, เดสก์ทอป = สกอล */}
                            <div
                                className="h-auto overflow-visible md:h-full md:overflow-y-auto md:pb-20 overscroll-contain"
                                style={{ scrollbarGutter: "stable" }}
                            >
                                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
                                    {detail.title}
                                </h3>

                                <div className="mt-4 text-gray-700 leading-relaxed space-y-4">
                                    {detail.content.map((b: ContentBlock, i) => {
                                        switch (b.type) {
                                            case "p": return <p key={i}>{b.text}</p>;
                                            case "h3": return <h4 key={i} className="pt-2 text-lg font-semibold text-indigo-600">{b.text}</h4>;
                                            case "ul": return <ul key={i} className="list-disc pl-5 space-y-1">{b.items.map((t, j) => <li key={j}>{t}</li>)}</ul>;
                                            case "ol": return <ol key={i} className="list-decimal pl-5 space-y-1">{b.items.map((t, j) => <li key={j}>{t}</li>)}</ol>;
                                            case "hr": return <hr key={i} className="border-gray-200 my-6" />;
                                        }
                                    })}
                                </div>

                                <div className="mt-6 border-b border-gray-200" />

                                <dl className="mt-6 space-y-4 text-sm pb-[max(1rem,env(safe-area-inset-bottom))]">
                                    {detail.rows.map(([k, v]) => {
                                        const values = Array.isArray(v) ? v : [v]; // บังคับให้เป็น array เสมอ
                                        return (
                                            <div key={k} className="flex items-baseline">
                                                <dt className="w-28 shrink-0 text-gray-500">{k}</dt>
                                                <dd className="font-medium text-gray-900 space-y-1">
                                                    {values.map((val, i) => {
                                                        const isUrl = k.toLowerCase().includes("url") || val.startsWith("http");
                                                        const href = isUrl && !/^https?:\/\//i.test(val) ? `https://${val}` : val;
                                                        return isUrl ? (
                                                            <div key={i}>
                                                                <a href={href} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline break-all">
                                                                    {val}
                                                                </a>
                                                            </div>
                                                        ) : (
                                                            <div key={i}>{val}</div>
                                                        );
                                                    })}
                                                </dd>
                                            </div>
                                        );
                                    })}
                                </dl>

                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>

    );
}

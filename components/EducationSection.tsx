import React from "react";
import { educationdata } from "@/lib/data";
import Education from "./education";

export default function EducationSection() {
  return (
<section id="education" className="mt-10 mb-10 scroll-mt-28">
      <h2 className="text-3xl font-bold text-black mb-8">Education</h2>
      {educationdata.map((item, idx) => (
        <Education {...item} key={idx} />
      ))}
    </section>
  );
}

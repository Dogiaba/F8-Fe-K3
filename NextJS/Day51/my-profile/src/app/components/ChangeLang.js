"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ChangeLang =({ children })=> {
  const [lang, setLang] = useState(children);
  const router = useRouter();


  function handleClickLang() {
    if (lang === "vi") {
      setLang("en");
    } else {
      setLang("vi");
    }
  }
  useEffect(() => {
    document.cookie = `lang=${lang}`;
    router.refresh();
  }, [lang]);
  return (
    <button className="btn-lang" onClick={handleClickLang}>
      {lang === "en" || lang === "vi" ? lang : ""}
    </button>
  );
}

export default ChangeLang;

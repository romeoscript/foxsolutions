"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="ml-20 mr-4">
      <select
        onChange={handleChange}
        value={currentLocale}
        className="p-2 text-white bg-[#fd7062] rounded-sm"
      >
        <option className="bg-[#1f425d]" value="en">
          English
        </option>
        <option className="bg-[#1f425d]" value="fr">
          Français
        </option>
        <option className="bg-[#1f425d]" value="de">
          Deutsch
        </option>
        <option className="bg-[#1f425d]" value="pt">
          Português
        </option>
        <option className="bg-[#1f425d]" value="es">
          Español{" "}
        </option>
      </select>
    </div>
  );
}

import { create } from "zustand";
import ru from "@/stores/messages/ru.json";
import en from "@/stores/messages/en.json";

interface LanguageStore {
  language: "ru" | "en";
  setLanguage: (language: "ru" | "en") => void;
  t: (key: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: "en", // Устанавливаем язык по умолчанию на "en"
  setLanguage: (language: "ru" | "en") => set({ language }),
  t: (key: string): string => {
    const currentLanguage = get().language;
    const translations: Record<string, any> =
      currentLanguage === "ru" ? ru : en;

    // Попробуем найти перевод, вернем строку по умолчанию, если не найдено
    const translation = key
      .split(".")
      .reduce(
        (obj, keyPart) =>
          obj && obj[keyPart] !== undefined ? obj[keyPart] : undefined,
        translations
      );

    return typeof translation === "string" ? translation : key; // Гарантируем, что возвращается строка
  },
}));

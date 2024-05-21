"use client";
import { useEffect, useState } from "react";

export default function useFields(url) {
  const [fields, setFields] = useState();
  useEffect(() => {
    const fieldsFetch = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/5320545a-7539-4c71-9730-8f9f4de3aec6"
        );
        const data = await response.text();
        const correctedText = data
          .replace(/label:/g, '"label":')
          .replace(/name:/g, '"name":')
          .replace(/isRequired:/g, '"isRequired":')
          .replace(/disabled:/g, '"disabled":')
          .replace(/type:/g, '"type":')
          .replace(/value:/g, '"value":')
          .replace(/'/g, '"')
          .replace(/,(\s*})/g, "$1");
        const json = JSON.parse(correctedText);
        json.data[0].name = "nombres";
        setFields(json);
      } catch (error) {
        console.error(error.message);
      }
    };
    fieldsFetch();
  }, []);

  return fields;
}

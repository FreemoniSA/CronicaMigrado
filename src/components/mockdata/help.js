import * as OpenAnything from "react-native-openanything";
export const helppages = [
  {
    title: "¿Cómo empezar?",
    redirect: (navigation) => navigation.navigate("Onboarding"),
  },
  {
    title: "Preguntas frecuentes",
    redirect: (navigation) => navigation.navigate("Preguntas frecuentes"),
  },
  {
    title: "Términos y condiciones",
    redirect: () =>
      OpenAnything.Pdf(
        "https://drive.google.com/file/d/1xKV8_u8teAqyGigqsP7CKmmu44Pj57DW/view?usp=sharing"
      ),
  },
  {
    title: "Políticas de privacidad",
    redirect: () =>
      OpenAnything.Pdf(
        "https://drive.google.com/file/d/1ioTosgJOC5XbTLh7OZRt7JzEvaxuvKuu/view?usp=sharing"
      ),
  },
  {
    title: "Reglamento",
    redirect: () =>
      OpenAnything.Pdf(
        "https://drive.google.com/file/d/1xVk36up1oy8fJ1hxcI0wBQ_f3ZnQ5jUp/view?usp=sharing"
      ),
  },
];

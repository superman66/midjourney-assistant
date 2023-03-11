import { FormValue } from "@/components/PromptGenerator";

export const getPhotographyPrompt = ({
  scene,
  character,
  light = [],
  photographer,
  camera,
  lens,
  elements,
  ar,
}: FormValue) => {
  const photographerText = photographer ? `by ${photographer}, ` : "";
  const elementsText = elements ? `${elements}, ` : "";
  const lightText = light?.length > 0 ? `${light?.join(",")}, ` : "";
  const cameraText = camera ? `${camera}, ` : "";
  const lensText = lens ? `${lens}, ` : "";
  return `${scene} style photo of ${character}, ${elementsText} ${lightText}
   ${photographerText} shot on ${cameraText} ${lensText} --ar ${ar}`;
};

export function generatePickerData(data: string[]) {
  return data.map((item) => ({
    value: item,
    label: item,
  }));
}

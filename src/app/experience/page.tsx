import { permanentRedirect } from "next/navigation";

export default function LegacyExperiencePage() {
  permanentRedirect("/about#experience");
}

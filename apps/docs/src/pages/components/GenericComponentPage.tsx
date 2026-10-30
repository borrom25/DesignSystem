import { useParams } from "react-router-dom";
import { DocsPage } from "@docs/components/DocsPage";

function toComponentName(kebab: string): string {
  return kebab
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export default function GenericComponentPage() {
  const { componentId } = useParams<{ componentId: string }>();
  const title = componentId ? toComponentName(componentId) : "Component";

  return <DocsPage title={title} description="Документация в разработке." />;
}

import { useEffect } from "react";

function ensureMetaTag(name) {
  let element = document.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  return element;
}

function Meta({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Netrue Limited`;
    ensureMetaTag("description").setAttribute("content", description);
  }, [title, description]);

  return null;
}

export default Meta;

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export function applyHead({ title, description, url }) {
  document.title = title;

  upsertMeta('meta[name="description"]', {
    name: "description",
    content: description
  });

  upsertMeta('meta[property="og:title"]', {
    property: "og:title",
    content: title
  });

  upsertMeta('meta[property="og:description"]', {
    property: "og:description",
    content: description
  });

  if (url) {
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: url
    });
  }

  upsertMeta('meta[property="og:type"]', {
    property: "og:type",
    content: "website"
  });

  upsertLink('link[rel="icon"]', {
    rel: "icon",
    href: "/favicon.svg"
  });

  upsertLink('link[rel="preconnect"][href="https://fonts.googleapis.com"]', {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  });

  upsertLink('link[rel="preconnect"][href="https://fonts.gstatic.com"]', {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossorigin: ""
  });

  upsertLink('link[rel="stylesheet"][href*="fonts.googleapis.com"]', {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
  });

  upsertLink('link[rel="stylesheet"][href*="font-awesome"]', {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  });
}

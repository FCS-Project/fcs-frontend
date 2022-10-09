import React from "react";
import { NextSeo } from "next-seo";

function SEO({ title, desc }) {
  const logoSrc = "https://i.ibb.co/F0qxGz7/logo.png";
  const description =
    "VamaCare is the modern-day solution for the medical world. We see that you are taken care of!";
  return (
    <NextSeo
      title={title}
      defaultTitle="VamaCare"
      description={desc ?? description}
      additionalMetaTags={[
        {
          property: "og:title",
          content: "VamaCare",
        },
        {
          property: "og:image",
          itemprop: "image",
          content: logoSrc,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:site_name",
          content: "VamaCare",
        },
        {
          itemprop: "thumbnailUrl",
          href: logoSrc,
        },
        {
          property: "og:type",
          content: "Medicine",
        },
        {
          property: "og:url",
          content: "",
        },
        {
          itemProp: "image",
          content: logoSrc,
        },
        {
          itemProp: "description",
          content: description,
        },
        {
          name: "msapplication-TileImage",
          content: logoSrc,
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "./favicon.svg",
          sizes: "76x76",
        },
      ]}
    />
  );
}

export default SEO;

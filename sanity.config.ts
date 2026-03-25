"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { projectId, dataset } from "./sanity/config";

export default defineConfig({
  name: "cammarota-galgano",
  title: "Studio Cammarota Galgano",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenuti")
          .items([
            S.listItem()
              .title("Impostazioni Sito")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.documentTypeListItem("page").title("Pagine"),
            S.documentTypeListItem("service").title("Servizi"),
            S.documentTypeListItem("post").title("Blog"),
            S.documentTypeListItem("teamMember").title("Professionisti"),
            S.documentTypeListItem("faq").title("FAQ"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});

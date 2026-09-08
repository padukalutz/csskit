<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="s"
>

  <xsl:output
    method="html"
    encoding="UTF-8"
    indent="yes"
  />

  <xsl:template match="/">

    <html lang="en">

      <head>

        <meta charset="UTF-8"/>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <title>CSSKit Sitemap</title>

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />

        <style>

          :root {
            --bg: #f7f7f5;
            --surface: #ffffff;
            --ink: #17171a;
            --muted: #77777f;
            --line: #e7e7e3;
            --violet: #6d5dfc;
          }

          * {
            box-sizing: border-box;
          }

          html {
            background: var(--bg);
          }

          body {
            margin: 0;
            background: var(--bg);
            color: var(--ink);
            font-family:
              Inter,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif;
            -webkit-font-smoothing: antialiased;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .page {
            width: min(100% - 40px, 1120px);
            margin: 0 auto;
            padding: 34px 0 80px;
          }

          /* BRAND */

          .brand {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 0;
            color: var(--ink);
            background: transparent;
            cursor: pointer;
          }

          .brand-mark {
            position: relative;
            width: 29px;
            height: 29px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            gap: 3px;
            padding: 5px;
            overflow: hidden;
            border: 1.5px solid var(--ink);
            border-radius: 8px;
            transform: rotate(-5deg);
          }

          .brand-mark span {
            width: 4px;
            border-radius: 3px 3px 1px 1px;
            background: var(--ink);
          }

          .brand-mark span:nth-child(1) {
            height: 8px;
          }

          .brand-mark span:nth-child(2) {
            height: 14px;
          }

          .brand-mark span:nth-child(3) {
            height: 10px;
          }

          .brand-name {
            font-size: 19px;
            font-weight: 800;
            letter-spacing: -0.8px;
          }

          .brand-name span {
            color: var(--violet);
          }

          /* INTRO */

          .intro {
            margin-top: 78px;
            margin-bottom: 38px;
          }

          .title {
            margin: 0;
            font-size: clamp(38px, 6vw, 58px);
            line-height: 0.98;
            font-weight: 800;
            letter-spacing: -3px;
          }

          .description {
            max-width: 560px;
            margin: 18px 0 0;
            color: var(--muted);
            font-size: 14px;
            line-height: 1.7;
          }

          /* META */

          .meta {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 18px;
          }

          .count {
            display: inline-flex;
            align-items: center;
            min-height: 30px;
            padding: 0 11px;
            border: 1px solid var(--line);
            border-radius: 8px;
            background: var(--surface);
            font-family:
              "DM Mono",
              ui-monospace,
              SFMono-Regular,
              Menlo,
              Monaco,
              Consolas,
              monospace;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.04em;
          }

          /* SITEMAP */

          .sitemap {
            overflow: hidden;
            border: 1px solid var(--line);
            border-radius: 16px;
            background: var(--surface);
          }

          .sitemap-head {
            display: grid;
            grid-template-columns: 1fr 180px;
            padding: 15px 20px;
            border-bottom: 1px solid var(--line);
            background: #fafaf8;
            color: var(--muted);
            font-family:
              "DM Mono",
              ui-monospace,
              SFMono-Regular,
              Menlo,
              Monaco,
              Consolas,
              monospace;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .url-list {
            display: flex;
            flex-direction: column;
          }

          .url-item {
            display: grid;
            grid-template-columns: 1fr 180px;
            align-items: center;
            min-height: 58px;
            padding: 0 20px;
            border-bottom: 1px solid var(--line);
          }

          .url-item:last-child {
            border-bottom: 0;
          }

          .url {
            min-width: 0;
            overflow: hidden;
            color: var(--ink);
            font-family:
              "DM Mono",
              ui-monospace,
              SFMono-Regular,
              Menlo,
              Monaco,
              Consolas,
              monospace;
            font-size: 10px;
            line-height: 1.5;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .url:hover {
            color: var(--violet);
          }

          .type {
            justify-self: start;
            display: inline-flex;
            align-items: center;
            min-height: 24px;
            padding: 0 9px;
            border-radius: 6px;
            background: #f1f0ff;
            color: var(--violet);
            font-family:
              "DM Mono",
              ui-monospace,
              SFMono-Regular,
              Menlo,
              Monaco,
              Consolas,
              monospace;
            font-size: 8px;
            font-weight: 700;
            text-transform: uppercase;
          }

          .note {
            margin-top: 20px;
            color: var(--muted);
            font-family:
              "DM Mono",
              ui-monospace,
              SFMono-Regular,
              Menlo,
              Monaco,
              Consolas,
              monospace;
            font-size: 8px;
            line-height: 1.6;
          }

          /* MOBILE */

          @media (max-width: 700px) {

            .page {
              width: min(100% - 28px, 1120px);
              padding-top: 24px;
              padding-bottom: 50px;
            }

            .intro {
              margin-top: 58px;
              margin-bottom: 30px;
            }

            .title {
              font-size: 42px;
              letter-spacing: -2.4px;
            }

            .description {
              font-size: 12px;
            }

            .sitemap-head {
              grid-template-columns: 1fr 90px;
              padding: 13px 14px;
            }

            .url-item {
              grid-template-columns: 1fr 90px;
              min-height: 54px;
              padding: 0 14px;
            }

            .url {
              font-size: 8px;
            }

            .type {
              font-size: 7px;
              padding: 0 7px;
            }
          }

          @media (max-width: 430px) {

            .page {
              width: min(100% - 22px, 1120px);
            }

            .intro {
              margin-top: 50px;
            }

            .title {
              font-size: 38px;
              letter-spacing: -2.4px;
            }

            .sitemap-head {
              grid-template-columns: 1fr 76px;
            }

            .url-item {
              grid-template-columns: 1fr 76px;
            }

            .url {
              font-size: 7px;
            }

            .type {
              font-size: 6px;
            }
          }

        </style>

      </head>

      <body>

        <main class="page">

          <!-- CSSKit Brand -->

          <a
            class="brand"
            href="./"
            aria-label="CSSKit homepage"
          >

            <span
              class="brand-mark"
              aria-hidden="true"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>

            <span class="brand-name">
              CSS<span>Kit</span>
            </span>

          </a>

          <!-- Intro -->

          <section class="intro">

            <h1 class="title">
              Sitemap
            </h1>

            <p class="description">
              A complete map of the CSSKit website.
              Browse all available tools, resources,
              guides, and pages.
            </p>

          </section>

          <!-- URL Count -->

          <div class="meta">

            <span class="count">

              <xsl:value-of
                select="count(s:urlset/s:url)"
              />

              <xsl:text> URLs</xsl:text>

            </span>

          </div>

          <!-- Sitemap Table -->

          <section class="sitemap">

            <div class="sitemap-head">

              <span>
                URL
              </span>

              <span>
                Type
              </span>

            </div>

            <div class="url-list">

              <xsl:for-each select="s:urlset/s:url">

                <xsl:variable
                  name="url"
                  select="string(s:loc)"
                />

                <div class="url-item">

                  <a
                    class="url"
                    href="{s:loc}"
                  >
                    <xsl:value-of
                      select="s:loc"
                    />
                  </a>

                  <span class="type">

                    <xsl:choose>

                      <xsl:when
                        test="contains($url, '/tools/')"
                      >
                        Tool
                      </xsl:when>

                      <xsl:when
                        test="contains($url, '/resources/guides/')"
                      >
                        Guide
                      </xsl:when>

                      <xsl:when
                        test="contains($url, '/resources/inspiration/')"
                      >
                        Inspiration
                      </xsl:when>

                      <xsl:when
                        test="contains($url, '/resources/')"
                      >
                        Resource
                      </xsl:when>

                      <xsl:when
                        test="
                          contains($url, '/privacy-policy')
                          or contains($url, '/terms')
                          or contains($url, '/disclaimer')
                          or contains($url, '/cookie-policy')
                        "
                      >
                        Legal
                      </xsl:when>

                      <xsl:otherwise>
                        Page
                      </xsl:otherwise>

                    </xsl:choose>

                  </span>

                </div>

              </xsl:for-each>

            </div>

          </section>

          <p class="note">
            This sitemap is generated from the XML sitemap
            used by search engines.
          </p>

        </main>

      </body>

    </html>

  </xsl:template>

</xsl:stylesheet>
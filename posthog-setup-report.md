<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the josh-hudson Astro static site. A reusable `posthog.astro` component was created and injected into `MainLayout.astro` so every page is automatically instrumented. Seven custom events were added across five files, covering the key user journeys: discovering and clicking through to projects, filtering the portfolio, reading blog posts, and following content discovery CTAs.

| Event | Description | File |
|---|---|---|
| `project_link_clicked` | Visitor clicks a Live Site or Source link on a project card. Properties: `project_title`, `category`, `link_type` (live/source). | `src/components/ProjectList.astro` |
| `view_all_projects_clicked` | Visitor clicks the "View All Projects" CTA on the homepage featured projects section. | `src/components/ProjectList.astro` |
| `project_category_filtered` | Visitor changes the category filter dropdown on the Work page. Property: `category`. | `src/components/ProjectList.astro` |
| `blog_tag_filtered` | Visitor clicks a tag filter on the blog listing page. Property: `tag`. | `src/pages/blog/index.astro` |
| `blog_post_viewed` | Visitor views a blog post — top of the blog content funnel. Properties: `post_title`, `tags`. | `src/pages/blog/[...slug].astro` |
| `related_post_clicked` | Visitor clicks a related post link at the bottom of a blog post. Property: `post_title`. | `src/layouts/BlogPost.astro` |
| `view_my_work_clicked` | Visitor clicks the "View my work" CTA on the About page. | `src/pages/about.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard – Analytics basics**: https://eu.posthog.com/project/151240/dashboard/597792
- **Project link clicks by type**: https://eu.posthog.com/project/151240/insights/4PtUMnR8
- **Portfolio conversion funnel** (pageview → view all projects → project link clicked): https://eu.posthog.com/project/151240/insights/7CRyZvL9
- **Blog post views over time**: https://eu.posthog.com/project/151240/insights/qtTCYLzS
- **Blog tag filter usage**: https://eu.posthog.com/project/151240/insights/2k5BQeaE
- **Portfolio CTA clicks** (view my work + view all projects): https://eu.posthog.com/project/151240/insights/a67fvyBZ

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-astro-static/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>

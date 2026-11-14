# Gaetan-Foisy

Source for my portfolio site. It's hosted on GitHub Pages, which builds it with [Jekyll](https://jekyllrb.com/) on every push to `master`. You don't need a build step: edit, commit, push.

## Where things live

| To change… | Edit |
|---|---|
| Navbar links | `_data/navigation.yml` |
| Contact info in the footer | `_config.yml` (`contact:`) |
| Cards on the Projects page (order, titles, thumbnails) | `_data/projects.yml` |
| Photos on the Gallery page | `_data/gallery.yml` |
| A project write-up | `projects/<name>.html` |
| Home and About pages | `index.html`, `about.html` |
| `<head>` (fonts, icons, shared CSS/JS) | `_includes/head.html` |
| Navbar / footer markup | `_includes/nav.html`, `_includes/footer.html` |
| Page frame (head + nav + content + footer) | `_layouts/default.html` |
| Project page frame (green banner + article column) | `_layouts/project.html` |
| Styles | `styles/` (`styles/projects/` for per-project CSS) |
| Mobile menu behavior | `scripts/main.js` |

Each page starts with a block of **front matter** between `---` lines. Jekyll wraps the rest of the file in its layout:

```html
---
heading: I made a <span>floating table!</span>   # project pages: banner title
styles:                                          # optional extra CSS for this page
- styles/projects/project-tensegrity_table.css
---
<div class="photo">…</div>
```

Every file in `projects/` automatically uses the project layout and the `../` path prefix (see `defaults:` in `_config.yml`). Inside a page, paths stay relative to that page, the same as before, e.g. `../assets/...` in `projects/`.

`resume.html` is an unfinished page with no front matter. Jekyll publishes it exactly as written.

## Adding a project

1. Copy `_templates/new-project.html` to `projects/<name>.html` and follow the comments at the top.
2. Put the images in `assets/Projects/<Name>/`.
3. Add a card to `_data/projects.yml`. Its position in the list is its position on the page.

For photos with captions, new pages can use the include:

```liquid
{% include photo.html src="../assets/Projects/Metrology/hero.jpg" caption="The finished machine." %}
```

Optional parameters are `alt="…"` and `class="…"`. A `.mp4` source shows a video player instead of an image. The older pages use the equivalent `<div class="photo">` HTML directly, and both work.

## Previewing locally (Windows)

Optional. You can also just push and check the live site.

1. Install Ruby with the DevKit from <https://rubyinstaller.org/> and let it run `ridk install` at the end.
2. In this folder, run `gem install bundler` and then `bundle install`. You only need to do this once.
3. Run `bundle exec jekyll serve` and open <http://localhost:4000>. Pages rebuild when you save. Restart after editing `_config.yml`.

Jekyll writes the built site to `_site/`, which git ignores.

## Not published

`*.docx`, `website photos backups/`, `draft images/`, the README and Ruby files stay in the repo but are excluded from the site (`exclude:` in `_config.yml`). Folders that start with `_` are never published as-is.

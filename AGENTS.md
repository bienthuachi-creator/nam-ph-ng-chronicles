<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Media
- All images/videos are stored as real files in the repo (images in `src/assets/`, videos in `public/media/`), never as CDN asset pointers — so every media file syncs to GitHub.
- Link previews use a real 1200×630 file in `public/` and absolute published-site URLs in leaf route metadata, because social crawlers cannot resolve bundled asset paths.

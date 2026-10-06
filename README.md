# Portfolio Website

A modern, responsive personal portfolio built with **Next.js (App Router)**.
Colour palette: **black, Nardo grey and purple**.

## Run it in VS Code

1. Install [Node.js](https://nodejs.org) (LTS).
2. Unzip this folder and open it in VS Code (`File → Open Folder`).
3. Open the terminal (`Ctrl + ~`) and run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000

> On Windows PowerShell, if you see "running scripts is disabled", run  
> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

## Make it yours

Open **`data/portfolio.js`** and change:

- your name, role, intro, email and social links
- about text, stats and skills
- projects (title, description, tags, links)
- education and experience

To add images: place files in the `public/` folder, then set
`photo: "/profile.jpg"` (profile) or `image: "/project1.png"` (a project).
Put your CV in `public/` and set `resume: "/resume.pdf"` to show a download button.

Colours live at the top of `app/globals.css` as CSS variables.

## Project structure

```
app/          layout, page, global styles
components/   Navbar, Hero, About, Projects, Journey, Contact, Footer
data/         portfolio.js  (all your content)
public/       images and CV
```

## Deploy

Push to GitHub and import the repo at https://vercel.com. It deploys automatically.

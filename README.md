<div align='center'>
    <Img alt='Logo' src='./src/app/favicon.ico' width='50px'/>
</div>
<h1 align='center'>
  hicass.dev - v2
</h1>
<p align='center'>
  The second version of <a href='https://www.hicass.dev/' target='_blank'>hicass.dev</a> built with <a href='https://nextjs.org/' target='_blank'>Next.js</a> and hosted with <a href='https://www.heroku.com/' target='_blank'>Heroku</a>
</p>

<div align='center'>
    <Img alt='App Screen Shot' src='./public/images/readme.png'>
</div>


## Tech Stack

**Client:** 
- [React](https://react.dev/)
- [Next.Js](https://nextjs.org/)
- [Email.Js](https://www.emailjs.com/)
- [React Awesome Reveal](https://react-awesome-reveal.morello.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

**Server:** 
- [Node](https://nodejs.org/en)

**Deployment:**
- [Heroku](https://www.heroku.com/)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| White | ![#F6F2F0](https://via.placeholder.com/10/F6F2F0f?text=+) #F6F2F0|
| Lightest Beige | ![#625446](https://via.placeholder.com/10/a89c90?text=+) #a89c90 |
| Darkest Beige| ![#625446](https://via.placeholder.com/10/625446?text=+) #625446 |
| Lightest Brown | ![#4a3f33](https://via.placeholder.com/10/4a3f33?text=+) #4a3f33 |
| Brown | ![#2e2c29](https://via.placeholder.com/10/2e2c29?text=+) #2e2c29 |
| Darkest Brown | ![#292520](https://via.placeholder.com/10/292520?text=+) #292520 |
| Lightest Black | ![#131212](https://via.placeholder.com/10/131212?text=+) #131212 |
| Darkest Black | ![#0e0e0e](https://via.placeholder.com/10/0e0e0e?text=+) #0e0e0e |

There are other colors in between these that were used, please view the main.css file in src/app/styles/main.css to see the full list.

## Features

- A comprehensive look into who I am as a Developer and the projects I have created.
- Responsive Design.
- Contact form with email verification and sent confirmation message.


## Demo

![Top of Page](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmptMWkzYmxnMmEwZzB5MmxzbmRvNzg2Z2o5ZjN6bmNieGxlcXc3byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kiZZdKTFBHaET3bF3B/giphy.gif)

![Website Content](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWhpN2F6MGp4NGRoeG4wNXJwaWc5NWM5ZHo4Nm1raWV0NXFsdnJqZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F9RmQdpiSCjehZwRvg/giphy.gif)

![Contact Form](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHlhejY3NHMyZWQzejVkMDV2emJmajkzdzlkZmo2Ym5sNWlsMDh6dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tJOav7aSkkhbGGfD5Y/giphy.gif)


## Environment Variables

To get the contact form to work using [Email.Js](https://www.emailjs.com/), you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_EMAIL_KEY`

If you have an Email.Js account you can use thid variable to reference your Public Key that can be found in your user profile.


## Run Locally

Clone the project

```bash
  git clone https://github.com/hicass/portfolio-v2.git
```

Go to the project directory

```bash
  cd portfolio-v2
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


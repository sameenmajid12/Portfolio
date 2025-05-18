function Footer() {
  return (
    <footer className="sidePadding py-8 md:py-10 bg-red flex justify-between items-center">
      <p className="text-bgColor text-[clamp(0.75rem,1.5vw,1rem)]">© 2025 Sameen Majid. All Rights Reserved.</p>
      <div className="flex text-[clamp(1.25rem,1.5vw,1.5rem)] items-center gap-x-3 md:gap-x-4 text-bgColor">
        <a
          href="https://www.linkedin.com/in/sameen-majid-8b31591ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="cursor-pointer fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.github.com/Saminraiyan12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="cursor-pointer fa-brands fa-github"></i>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=samin.raiyan1@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="cursor-pointer fa-solid fa-inbox"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
